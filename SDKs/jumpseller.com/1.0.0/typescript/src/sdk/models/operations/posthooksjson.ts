import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostHooksJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostHooksJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostHooksJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HookEdit;
}


export class PostHooksJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hook?: shared.Hook;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
