import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomerCategoriesIdCustomersJsonPathParams;

  @Metadata()
  queryParams: DeleteCustomerCategoriesIdCustomersJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomersToCustomerCategory;
}


export class DeleteCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomerCategoriesIdCustomersJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
