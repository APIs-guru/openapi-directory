import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmAuthenticationFlowsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationFlowsIdPathParams;
}


export class GetRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
  @Metadata()
  authenticationFlowRepresentation?: shared.AuthenticationFlowRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
