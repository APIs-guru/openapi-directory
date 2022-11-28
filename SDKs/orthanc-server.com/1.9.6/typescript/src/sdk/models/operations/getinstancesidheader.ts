import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdHeaderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdHeaderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetInstancesIdHeaderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdHeaderPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdHeaderQueryParams;
}


export class GetInstancesIdHeaderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInstancesIdHeader200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
