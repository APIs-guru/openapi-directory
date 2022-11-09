import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=flowAlias" })
  flowAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationFlowsFlowAliasExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticationExecutionInfoRepresentation;
}


export class PutRealmAuthenticationFlowsFlowAliasExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
