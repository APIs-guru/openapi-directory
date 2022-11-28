import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImageRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteImageRegionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=regionIds" })
  regionIds: string[];
}


export class DeleteImageRegionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteImageRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImageRegionsPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteImageRegionsQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteImageRegionsHeaders;
}


export class DeleteImageRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
