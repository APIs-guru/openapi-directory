import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomerCategoriesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCustomerCategoriesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCustomerCategoriesJsonQueryParams;
}


export class GetCustomerCategoriesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CustomerCategory })
  customerCategories?: shared.CustomerCategory[];

  @Metadata()
  statusCode: number;
}
