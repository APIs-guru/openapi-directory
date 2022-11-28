import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagePerformancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum GetImagePerformancesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}


export class GetImagePerformancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetImagePerformancesOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetImagePerformancesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImagePerformancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagePerformancesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImagePerformancesQueryParams;

  @SpeakeasyMetadata()
  headers: GetImagePerformancesHeaders;
}


export class GetImagePerformancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ImagePerformance })
  imagePerformances?: shared.ImagePerformance[];

  @SpeakeasyMetadata()
  statusCode: number;
}
