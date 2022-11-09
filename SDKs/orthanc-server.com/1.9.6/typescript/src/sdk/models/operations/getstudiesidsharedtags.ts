import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdSharedTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdSharedTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetStudiesIdSharedTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdSharedTagsPathParams;

  @Metadata()
  queryParams: GetStudiesIdSharedTagsQueryParams;
}


export class GetStudiesIdSharedTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdSharedTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
