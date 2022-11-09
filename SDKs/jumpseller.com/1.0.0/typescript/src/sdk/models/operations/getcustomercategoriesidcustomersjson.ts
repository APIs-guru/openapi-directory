import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomerCategoriesIdCustomersJsonPathParams;

  @Metadata()
  queryParams: GetCustomerCategoriesIdCustomersJsonQueryParams;
}


export class GetCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Customer })
  customers?: shared.Customer[];

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
