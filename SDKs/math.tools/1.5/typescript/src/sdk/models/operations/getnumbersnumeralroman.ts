import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersNumeralRomanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersNumeralRomanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersNumeralRomanRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersNumeralRomanQueryParams;

  @Metadata()
  security: GetNumbersNumeralRomanSecurity;
}


export class GetNumbersNumeralRomanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
