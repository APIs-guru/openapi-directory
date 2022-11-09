import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationFlowsFlowAliasExecutionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=flowAlias" })
  flowAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationFlowsFlowAliasExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationFlowsFlowAliasExecutionsPathParams;
}


export class GetRealmAuthenticationFlowsFlowAliasExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
