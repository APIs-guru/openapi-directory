import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetImagePerformancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum GetImagePerformancesOrderByEnum {
    Newest = "Newest"
,    Oldest = "Oldest"
}


export class GetImagePerformancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetImagePerformancesOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetImagePerformancesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImagePerformancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImagePerformancesPathParams;

  @Metadata()
  queryParams: GetImagePerformancesQueryParams;

  @Metadata()
  headers: GetImagePerformancesHeaders;
}


export class GetImagePerformancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ImagePerformance })
  imagePerformances?: shared.ImagePerformance[];

  @Metadata()
  statusCode: number;
}
