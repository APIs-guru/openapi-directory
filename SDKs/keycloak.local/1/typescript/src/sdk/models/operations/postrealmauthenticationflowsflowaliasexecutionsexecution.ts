import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flowAlias" })
  flowAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
