import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumbersNumeralEgyptianQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersNumeralEgyptianSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersNumeralEgyptianRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNumbersNumeralEgyptianQueryParams;

  @SpeakeasyMetadata()
  security: GetNumbersNumeralEgyptianSecurity;
}


export class GetNumbersNumeralEgyptianResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
