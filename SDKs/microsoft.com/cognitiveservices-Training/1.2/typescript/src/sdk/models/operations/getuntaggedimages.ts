import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUntaggedImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum GetUntaggedImagesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}


export class GetUntaggedImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetUntaggedImagesOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetUntaggedImagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetUntaggedImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUntaggedImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUntaggedImagesQueryParams;

  @SpeakeasyMetadata()
  headers: GetUntaggedImagesHeaders;
}


export class GetUntaggedImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Image })
  images?: shared.Image[];

  @SpeakeasyMetadata()
  statusCode: number;
}
