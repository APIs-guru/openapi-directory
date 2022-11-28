import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersIsPalindromeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersIsPalindromeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersIsPalindromeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersIsPalindromeQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersIsPalindromeSecurity;
}


export class GetNumbersIsPalindromeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
