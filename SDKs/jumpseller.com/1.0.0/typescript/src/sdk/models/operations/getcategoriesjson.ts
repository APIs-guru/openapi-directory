import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCategoriesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoriesJsonQueryParams;
}


export class GetCategoriesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
