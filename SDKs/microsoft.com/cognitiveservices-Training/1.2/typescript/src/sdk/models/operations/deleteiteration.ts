import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteIterationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteIterationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteIterationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteIterationPathParams;

  @Metadata()
  headers: DeleteIterationHeaders;
}


export class DeleteIterationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
