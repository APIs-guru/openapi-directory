import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class GetProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectPathParams;

  @Metadata()
  security: GetProjectSecurity;
}


export class GetProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  projectDetails?: shared.ProjectDetails;
}
