import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCategoriesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCategoriesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCategoriesJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CategoryEdit;
}


export class PostCategoriesJsonResponse extends SpeakeasyBase {
  @Metadata()
  category?: shared.Category;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
