import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspacesWorkspaceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspacesWorkspaceIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspacesWorkspaceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspacesWorkspaceIdPathParams;

  @SpeakeasyMetadata()
  security: GetWorkspacesWorkspaceIdSecurity;
}


export class GetWorkspacesWorkspaceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
