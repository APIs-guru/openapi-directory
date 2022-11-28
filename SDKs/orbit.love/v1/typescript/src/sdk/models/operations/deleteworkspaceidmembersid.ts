import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWorkspaceIdMembersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspaceIdMembersIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class DeleteWorkspaceIdMembersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWorkspaceIdMembersIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteWorkspaceIdMembersIdSecurity;
}


export class DeleteWorkspaceIdMembersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
