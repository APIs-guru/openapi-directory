import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class GetProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectPathParams;

  @SpeakeasyMetadata()
  security: GetProjectSecurity;
}


export class GetProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  projectDetails?: shared.ProjectDetails;
}
