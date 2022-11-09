import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmAuthenticationRequiredActionsAliasRaisePriorityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationRequiredActionsAliasRaisePriorityPathParams;
}


export class PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
