import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCustomerCategoriesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomerCategoriesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomerCategoriesIdJsonPathParams;

  @Metadata()
  queryParams: DeleteCustomerCategoriesIdJsonQueryParams;
}


export class DeleteCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomerCategoriesIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
