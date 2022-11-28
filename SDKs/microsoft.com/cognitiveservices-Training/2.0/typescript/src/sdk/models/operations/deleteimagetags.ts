import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImageTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteImageTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds: string[];
}


export class DeleteImageTagsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteImageTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImageTagsPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteImageTagsQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteImageTagsHeaders;
}


export class DeleteImageTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
