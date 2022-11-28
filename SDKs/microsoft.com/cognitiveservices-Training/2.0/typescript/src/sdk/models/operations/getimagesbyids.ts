import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagesByIdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImagesByIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class GetImagesByIdsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImagesByIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagesByIdsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImagesByIdsQueryParams;

  @SpeakeasyMetadata()
  headers: GetImagesByIdsHeaders;
}


export class GetImagesByIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Image })
  images?: shared.Image[];

  @SpeakeasyMetadata()
  statusCode: number;
}
