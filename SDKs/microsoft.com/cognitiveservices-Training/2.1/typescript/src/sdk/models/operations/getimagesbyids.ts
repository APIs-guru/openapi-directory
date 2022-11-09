import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetImagesByIdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImagesByIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class GetImagesByIdsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImagesByIdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImagesByIdsPathParams;

  @Metadata()
  queryParams: GetImagesByIdsQueryParams;

  @Metadata()
  headers: GetImagesByIdsHeaders;
}


export class GetImagesByIdsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Image })
  images?: shared.Image[];

  @Metadata()
  statusCode: number;
}
