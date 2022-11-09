import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspaceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspacesWorkspaceIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspacesWorkspaceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspaceIdPathParams;

  @Metadata()
  security: GetWorkspacesWorkspaceIdSecurity;
}


export class GetWorkspacesWorkspaceIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
