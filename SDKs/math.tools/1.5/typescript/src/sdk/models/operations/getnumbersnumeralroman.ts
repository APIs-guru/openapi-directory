import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersNumeralRomanQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersNumeralRomanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersNumeralRomanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersNumeralRomanQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersNumeralRomanSecurity;
}


export class GetNumbersNumeralRomanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
