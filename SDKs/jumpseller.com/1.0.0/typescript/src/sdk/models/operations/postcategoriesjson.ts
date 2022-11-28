import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCategoriesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCategoriesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCategoriesJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CategoryEdit;
}


export class PostCategoriesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
