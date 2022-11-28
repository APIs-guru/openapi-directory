import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProductsIdOptionsOptionIdValuesJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class PostProductsIdOptionsOptionIdValuesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProductsIdOptionsOptionIdValuesJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostProductsIdOptionsOptionIdValuesJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionValueEdit;
}


export class PostProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productOptionValue?: shared.ProductOptionValue;

  @SpeakeasyMetadata()
  statusCode: number;
}
