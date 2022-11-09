import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetStudiesIdInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdInstancesPathParams;

  @Metadata()
  queryParams: GetStudiesIdInstancesQueryParams;
}


export class GetStudiesIdInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdInstances200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
