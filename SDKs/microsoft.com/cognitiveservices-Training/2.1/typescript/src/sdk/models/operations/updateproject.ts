import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class UpdateProjectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class UpdateProjectRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  project?: shared.ProjectInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  project1?: shared.ProjectInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  project2?: shared.ProjectInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProjectPathParams;

  @SpeakeasyMetadata()
  headers: UpdateProjectHeaders;

  @SpeakeasyMetadata()
  request: UpdateProjectRequestsInput;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  statusCode: number;
}
