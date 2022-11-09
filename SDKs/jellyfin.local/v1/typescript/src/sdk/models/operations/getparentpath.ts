import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParentPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class GetParentPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetParentPathRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetParentPathQueryParams;

  @Metadata()
  security: GetParentPathSecurity;
}


export class GetParentPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getParentPath200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
