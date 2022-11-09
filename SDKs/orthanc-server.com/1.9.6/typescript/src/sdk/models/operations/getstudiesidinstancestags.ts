import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdInstancesTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdInstancesTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetStudiesIdInstancesTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdInstancesTagsPathParams;

  @Metadata()
  queryParams: GetStudiesIdInstancesTagsQueryParams;
}


export class GetStudiesIdInstancesTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdInstancesTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
