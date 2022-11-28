import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class DeleteWorkspaceIdMembersMemberIdIdentitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Identity;

  @SpeakeasyMetadata()
  security: DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity;
}


export class DeleteWorkspaceIdMembersMemberIdIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
