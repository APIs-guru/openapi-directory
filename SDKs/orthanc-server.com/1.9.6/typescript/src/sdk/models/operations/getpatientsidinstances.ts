import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetPatientsIdInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdInstancesPathParams;

  @Metadata()
  queryParams: GetPatientsIdInstancesQueryParams;
}


export class GetPatientsIdInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdInstances200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
