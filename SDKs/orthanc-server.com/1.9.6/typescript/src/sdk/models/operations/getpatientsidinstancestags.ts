import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdInstancesTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdInstancesTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetPatientsIdInstancesTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdInstancesTagsPathParams;

  @Metadata()
  queryParams: GetPatientsIdInstancesTagsQueryParams;
}


export class GetPatientsIdInstancesTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdInstancesTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
