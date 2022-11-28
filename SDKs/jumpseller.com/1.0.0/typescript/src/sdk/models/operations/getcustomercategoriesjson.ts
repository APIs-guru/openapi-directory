import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomerCategoriesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCustomerCategoriesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCustomerCategoriesJsonQueryParams;
}


export class GetCustomerCategoriesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CustomerCategory })
  customerCategories?: shared.CustomerCategory[];

  @SpeakeasyMetadata()
  statusCode: number;
}
