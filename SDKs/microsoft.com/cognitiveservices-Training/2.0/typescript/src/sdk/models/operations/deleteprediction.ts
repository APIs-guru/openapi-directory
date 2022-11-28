import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePredictionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeletePredictionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: string[];
}


export class DeletePredictionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeletePredictionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePredictionPathParams;

  @SpeakeasyMetadata()
  queryParams: DeletePredictionQueryParams;

  @SpeakeasyMetadata()
  headers: DeletePredictionHeaders;
}


export class DeletePredictionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
