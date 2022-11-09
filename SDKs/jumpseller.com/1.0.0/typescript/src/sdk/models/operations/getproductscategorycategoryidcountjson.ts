import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsCategoryCategoryIdCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: number;
}


export class GetProductsCategoryCategoryIdCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsCategoryCategoryIdCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsCategoryCategoryIdCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsCategoryCategoryIdCountJsonQueryParams;
}


export class GetProductsCategoryCategoryIdCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
