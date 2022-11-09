import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWorkspaceIdMembersMemberIdActivitiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspaceIdMembersMemberIdActivitiesIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWorkspaceIdMembersMemberIdActivitiesIdPathParams;

  @Metadata()
  security: DeleteWorkspaceIdMembersMemberIdActivitiesIdSecurity;
}


export class DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
