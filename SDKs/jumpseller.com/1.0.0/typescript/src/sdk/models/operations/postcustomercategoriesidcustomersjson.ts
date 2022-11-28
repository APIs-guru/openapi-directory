import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCustomerCategoriesIdCustomersJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCustomerCategoriesIdCustomersJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomersToCustomerCategory;
}


export class PostCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Customer })
  customers?: shared.Customer[];

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
