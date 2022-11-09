import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomerCategoriesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomerCategoriesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomerCategoriesIdJsonPathParams;

  @Metadata()
  queryParams: GetCustomerCategoriesIdJsonQueryParams;
}


export class GetCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerCategory?: shared.CustomerCategory;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
