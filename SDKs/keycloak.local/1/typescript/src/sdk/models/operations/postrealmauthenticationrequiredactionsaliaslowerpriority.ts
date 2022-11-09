import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams;
}


export class PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
