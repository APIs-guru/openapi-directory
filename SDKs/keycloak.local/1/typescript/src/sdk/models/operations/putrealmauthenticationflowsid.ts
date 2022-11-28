import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmAuthenticationFlowsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmAuthenticationFlowsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticationFlowRepresentation;
}


export class PutRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
