import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspaceIdActivityTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspaceIdActivityTypesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdActivityTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspaceIdActivityTypesPathParams;

  @SpeakeasyMetadata()
  security: GetWorkspaceIdActivityTypesSecurity;
}


export class GetWorkspaceIdActivityTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
