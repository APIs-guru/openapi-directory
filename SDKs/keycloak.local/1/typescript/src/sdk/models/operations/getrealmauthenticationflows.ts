import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmAuthenticationFlowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationFlowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationFlowsPathParams;
}


export class GetRealmAuthenticationFlowsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AuthenticationFlowRepresentation })
  authenticationFlowRepresentations?: shared.AuthenticationFlowRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
