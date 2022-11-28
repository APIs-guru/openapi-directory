import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteIterationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteIterationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteIterationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteIterationPathParams;

  @SpeakeasyMetadata()
  headers: DeleteIterationHeaders;
}


export class DeleteIterationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
