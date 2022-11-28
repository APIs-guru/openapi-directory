import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductsCategoryCategoryIdCountJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: number;
}


export class GetProductsCategoryCategoryIdCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsCategoryCategoryIdCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsCategoryCategoryIdCountJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsCategoryCategoryIdCountJsonQueryParams;
}


export class GetProductsCategoryCategoryIdCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
