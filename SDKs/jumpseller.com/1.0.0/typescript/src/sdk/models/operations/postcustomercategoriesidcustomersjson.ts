import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCustomerCategoriesIdCustomersJsonPathParams;

  @Metadata()
  queryParams: PostCustomerCategoriesIdCustomersJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomersToCustomerCategory;
}


export class PostCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Customer })
  customers?: shared.Customer[];

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
