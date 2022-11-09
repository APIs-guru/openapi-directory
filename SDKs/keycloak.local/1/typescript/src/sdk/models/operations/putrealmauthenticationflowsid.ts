import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmAuthenticationFlowsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmAuthenticationFlowsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticationFlowRepresentation;
}


export class PutRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
