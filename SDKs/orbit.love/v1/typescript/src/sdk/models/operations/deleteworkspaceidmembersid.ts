import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWorkspaceIdMembersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspaceIdMembersIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class DeleteWorkspaceIdMembersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWorkspaceIdMembersIdPathParams;

  @Metadata()
  security: DeleteWorkspaceIdMembersIdSecurity;
}


export class DeleteWorkspaceIdMembersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
