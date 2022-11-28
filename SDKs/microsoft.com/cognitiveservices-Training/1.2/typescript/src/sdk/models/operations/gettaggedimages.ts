import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTaggedImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum GetTaggedImagesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}


export class GetTaggedImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetTaggedImagesOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetTaggedImagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetTaggedImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaggedImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTaggedImagesQueryParams;

  @SpeakeasyMetadata()
  headers: GetTaggedImagesHeaders;
}


export class GetTaggedImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Image })
  images?: shared.Image[];

  @SpeakeasyMetadata()
  statusCode: number;
}
