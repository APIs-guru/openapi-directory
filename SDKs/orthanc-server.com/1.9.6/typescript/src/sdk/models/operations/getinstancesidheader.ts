import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdHeaderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdHeaderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetInstancesIdHeaderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdHeaderPathParams;

  @Metadata()
  queryParams: GetInstancesIdHeaderQueryParams;
}


export class GetInstancesIdHeaderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdHeader200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
