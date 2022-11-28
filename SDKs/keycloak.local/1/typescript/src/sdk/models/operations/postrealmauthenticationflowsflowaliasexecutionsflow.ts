import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flowAlias" })
  flowAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
