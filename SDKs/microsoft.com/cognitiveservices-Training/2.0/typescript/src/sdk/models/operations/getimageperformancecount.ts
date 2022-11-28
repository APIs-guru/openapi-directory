import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagePerformanceCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImagePerformanceCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];
}


export class GetImagePerformanceCountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImagePerformanceCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagePerformanceCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImagePerformanceCountQueryParams;

  @SpeakeasyMetadata()
  headers: GetImagePerformanceCountHeaders;
}


export class GetImagePerformanceCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getImagePerformanceCount200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  getImagePerformanceCount200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
