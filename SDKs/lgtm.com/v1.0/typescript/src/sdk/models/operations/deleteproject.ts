import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class DeleteProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class DeleteProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProjectPathParams;

  @Metadata()
  security: DeleteProjectSecurity;
}


export class DeleteProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  projectDetails?: shared.ProjectDetails;
}
