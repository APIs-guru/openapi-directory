import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCategoriesIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCategoriesIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCategoriesIdJsonQueryParams;
}


export class GetCategoriesIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
