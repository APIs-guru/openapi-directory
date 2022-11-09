import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_number" })
  projectNumber: string;
}


export class ProjectsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsReadPathParams;
}


export class ProjectsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  project?: shared.Project;

  @Metadata()
  statusCode: number;
}
