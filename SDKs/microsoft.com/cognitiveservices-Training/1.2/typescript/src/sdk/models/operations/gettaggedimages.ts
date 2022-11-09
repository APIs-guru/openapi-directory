import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTaggedImagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum GetTaggedImagesOrderByEnum {
    Newest = "Newest"
,    Oldest = "Oldest"
}


export class GetTaggedImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetTaggedImagesOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetTaggedImagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetTaggedImagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaggedImagesPathParams;

  @Metadata()
  queryParams: GetTaggedImagesQueryParams;

  @Metadata()
  headers: GetTaggedImagesHeaders;
}


export class GetTaggedImagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Image })
  images?: shared.Image[];

  @Metadata()
  statusCode: number;
}
