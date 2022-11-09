import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUntaggedImagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum GetUntaggedImagesOrderByEnum {
    Newest = "Newest"
,    Oldest = "Oldest"
}


export class GetUntaggedImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetUntaggedImagesOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetUntaggedImagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetUntaggedImagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUntaggedImagesPathParams;

  @Metadata()
  queryParams: GetUntaggedImagesQueryParams;

  @Metadata()
  headers: GetUntaggedImagesHeaders;
}


export class GetUntaggedImagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Image })
  images?: shared.Image[];

  @Metadata()
  statusCode: number;
}
