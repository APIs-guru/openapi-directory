import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersBaseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: number;
}


export class GetNumbersBaseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersBaseRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersBaseQueryParams;

  @Metadata()
  security: GetNumbersBaseSecurity;
}


export class GetNumbersBaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
