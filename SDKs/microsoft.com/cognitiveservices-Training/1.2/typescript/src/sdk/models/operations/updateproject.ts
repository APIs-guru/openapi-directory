import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class UpdateProjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class UpdateProjectRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  project?: shared.Project;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  project1?: shared.Project;

  @Metadata({ data: "request, media_type=text/json" })
  project2?: shared.Project;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProjectPathParams;

  @Metadata()
  headers: UpdateProjectHeaders;

  @Metadata()
  request: UpdateProjectRequests;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  project?: shared.Project;

  @Metadata()
  statusCode: number;
}
