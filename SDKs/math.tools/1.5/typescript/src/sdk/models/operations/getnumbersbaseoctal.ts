import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersBaseOctalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetNumbersBaseOctalSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersBaseOctalRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersBaseOctalQueryParams;

  @Metadata()
  security: GetNumbersBaseOctalSecurity;
}


export class GetNumbersBaseOctalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
