import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flowAlias" })
  flowAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationFlowsFlowAliasExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticationExecutionInfoRepresentation;
}


export class PutRealmAuthenticationFlowsFlowAliasExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
