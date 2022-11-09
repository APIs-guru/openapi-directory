import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePredictionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeletePredictionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: string[];
}


export class DeletePredictionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeletePredictionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePredictionPathParams;

  @Metadata()
  queryParams: DeletePredictionQueryParams;

  @Metadata()
  headers: DeletePredictionHeaders;
}


export class DeletePredictionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
