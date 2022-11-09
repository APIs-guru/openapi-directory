import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCustomerCategoriesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCustomerCategoriesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCustomerCategoriesIdJsonPathParams;

  @Metadata()
  queryParams: PutCustomerCategoriesIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerCategoryEdit;
}


export class PutCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerCategory?: shared.CustomerCategory;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
