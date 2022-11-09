import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetInstancesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdPathParams;

  @Metadata()
  queryParams: GetInstancesIdQueryParams;
}


export class GetInstancesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
