import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCustomersIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomersIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomersIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomersIdJsonPathParams;

  @Metadata()
  queryParams: DeleteCustomersIdJsonQueryParams;
}


export class DeleteCustomersIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomersIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
