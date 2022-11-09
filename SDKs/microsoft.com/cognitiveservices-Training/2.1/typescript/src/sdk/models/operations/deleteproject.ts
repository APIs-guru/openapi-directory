import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteProjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProjectPathParams;

  @Metadata()
  headers: DeleteProjectHeaders;
}


export class DeleteProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
