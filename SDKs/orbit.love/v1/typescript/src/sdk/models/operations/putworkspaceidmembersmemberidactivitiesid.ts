import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutWorkspaceIdMembersMemberIdActivitiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PutWorkspaceIdMembersMemberIdActivitiesIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PutWorkspaceIdMembersMemberIdActivitiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWorkspaceIdMembersMemberIdActivitiesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Activity;

  @Metadata()
  security: PutWorkspaceIdMembersMemberIdActivitiesIdSecurity;
}


export class PutWorkspaceIdMembersMemberIdActivitiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
