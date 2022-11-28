import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutWorkspaceIdMembersMemberIdActivitiesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PutWorkspaceIdMembersMemberIdActivitiesIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PutWorkspaceIdMembersMemberIdActivitiesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutWorkspaceIdMembersMemberIdActivitiesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Activity;

  @SpeakeasyMetadata()
  security: PutWorkspaceIdMembersMemberIdActivitiesIdSecurity;
}


export class PutWorkspaceIdMembersMemberIdActivitiesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
