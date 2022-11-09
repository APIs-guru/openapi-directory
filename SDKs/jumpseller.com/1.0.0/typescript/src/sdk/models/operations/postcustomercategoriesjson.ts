import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCustomerCategoriesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomerCategoriesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCustomerCategoriesJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerCategoryEdit;
}


export class PostCustomerCategoriesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerCategory?: shared.CustomerCategory;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
