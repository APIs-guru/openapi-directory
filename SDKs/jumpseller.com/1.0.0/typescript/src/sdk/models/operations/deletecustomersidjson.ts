import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCustomersIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomersIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomersIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCustomersIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteCustomersIdJsonQueryParams;
}


export class DeleteCustomersIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCustomersIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
