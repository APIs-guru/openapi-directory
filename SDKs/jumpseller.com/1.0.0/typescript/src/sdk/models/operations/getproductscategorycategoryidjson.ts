import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsCategoryCategoryIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: number;
}


export class GetProductsCategoryCategoryIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsCategoryCategoryIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsCategoryCategoryIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsCategoryCategoryIdJsonQueryParams;
}


export class GetProductsCategoryCategoryIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata({ elemType: shared.Product })
  products?: shared.Product[];

  @Metadata()
  statusCode: number;
}
