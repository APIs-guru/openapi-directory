import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class DeleteProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class DeleteProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectPathParams;

  @SpeakeasyMetadata()
  security: DeleteProjectSecurity;
}


export class DeleteProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  projectDetails?: shared.ProjectDetails;
}
