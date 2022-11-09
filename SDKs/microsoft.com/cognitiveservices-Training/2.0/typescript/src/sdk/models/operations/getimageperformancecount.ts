import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetImagePerformanceCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImagePerformanceCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];
}


export class GetImagePerformanceCountHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImagePerformanceCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImagePerformanceCountPathParams;

  @Metadata()
  queryParams: GetImagePerformanceCountQueryParams;

  @Metadata()
  headers: GetImagePerformanceCountHeaders;
}


export class GetImagePerformanceCountResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getImagePerformanceCount200ApplicationJsonInt32Integer?: number;

  @Metadata()
  getImagePerformanceCount200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
