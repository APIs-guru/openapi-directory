import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCustomerCategoriesIdCustomersJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteCustomerCategoriesIdCustomersJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomersToCustomerCategory;
}


export class DeleteCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCustomerCategoriesIdCustomersJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
