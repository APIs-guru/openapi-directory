import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersCardinalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: number;
}


export class GetNumbersCardinalSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersCardinalRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersCardinalQueryParams;

  @Metadata()
  security: GetNumbersCardinalSecurity;
}


export class GetNumbersCardinalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
