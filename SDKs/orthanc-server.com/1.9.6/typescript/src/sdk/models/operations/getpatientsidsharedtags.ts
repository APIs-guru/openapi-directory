import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdSharedTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdSharedTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetPatientsIdSharedTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdSharedTagsPathParams;

  @Metadata()
  queryParams: GetPatientsIdSharedTagsQueryParams;
}


export class GetPatientsIdSharedTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdSharedTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
