import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class GetTagsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTagsQueryParams;

  @SpeakeasyMetadata()
  headers: GetTagsHeaders;
}


export class GetTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagList?: shared.TagList;
}
