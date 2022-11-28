import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWorkspaceIdMembersMemberIdActivitiesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspaceIdMembersMemberIdActivitiesIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWorkspaceIdMembersMemberIdActivitiesIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteWorkspaceIdMembersMemberIdActivitiesIdSecurity;
}


export class DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
