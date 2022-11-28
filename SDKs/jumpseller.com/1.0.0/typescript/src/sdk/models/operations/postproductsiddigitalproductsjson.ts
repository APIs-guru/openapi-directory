import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProductsIdDigitalProductsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdDigitalProductsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdDigitalProductsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProductsIdDigitalProductsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostProductsIdDigitalProductsJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DigitalProductEdit;
}


export class PostProductsIdDigitalProductsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  digitalProduct?: shared.DigitalProduct;

  @SpeakeasyMetadata()
  statusCode: number;
}
