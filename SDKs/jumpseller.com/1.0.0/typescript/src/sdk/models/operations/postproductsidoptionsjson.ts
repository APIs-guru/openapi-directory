import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProductsIdOptionsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdOptionsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdOptionsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProductsIdOptionsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostProductsIdOptionsJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionEdit;
}


export class PostProductsIdOptionsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productOption?: shared.ProductOption;

  @SpeakeasyMetadata()
  statusCode: number;
}
