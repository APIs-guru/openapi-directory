import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=flowAlias" })
  flowAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
