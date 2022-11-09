import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersNumeralEgyptianQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersNumeralEgyptianSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersNumeralEgyptianRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersNumeralEgyptianQueryParams;

  @Metadata()
  security: GetNumbersNumeralEgyptianSecurity;
}


export class GetNumbersNumeralEgyptianResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
