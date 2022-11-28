import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmAuthenticationFlowsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationFlowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationFlowsPathParams;
}


export class GetRealmAuthenticationFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AuthenticationFlowRepresentation })
  authenticationFlowRepresentations?: shared.AuthenticationFlowRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
