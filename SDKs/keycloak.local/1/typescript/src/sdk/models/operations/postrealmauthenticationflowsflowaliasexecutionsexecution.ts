import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=flowAlias" })
  flowAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
