import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutHooksIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutHooksIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutHooksIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutHooksIdJsonPathParams;

  @Metadata()
  queryParams: PutHooksIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HookEdit;
}


export class PutHooksIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hook?: shared.Hook;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
