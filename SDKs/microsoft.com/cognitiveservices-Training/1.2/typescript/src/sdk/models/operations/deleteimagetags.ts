import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImageTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteImageTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds: string[];
}


export class DeleteImageTagsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteImageTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteImageTagsPathParams;

  @Metadata()
  queryParams: DeleteImageTagsQueryParams;

  @Metadata()
  headers: DeleteImageTagsHeaders;
}


export class DeleteImageTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
