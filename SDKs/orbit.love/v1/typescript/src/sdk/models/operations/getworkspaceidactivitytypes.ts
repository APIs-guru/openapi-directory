import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceIdActivityTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspaceIdActivityTypesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdActivityTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceIdActivityTypesPathParams;

  @Metadata()
  security: GetWorkspaceIdActivityTypesSecurity;
}


export class GetWorkspaceIdActivityTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
