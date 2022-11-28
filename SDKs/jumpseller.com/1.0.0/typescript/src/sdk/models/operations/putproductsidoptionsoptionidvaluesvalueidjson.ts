import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class PutProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProductsIdOptionsOptionIdValuesValueIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PutProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionValueEdit;
}


export class PutProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  productOptionValue?: shared.ProductOptionValue;

  @SpeakeasyMetadata()
  statusCode: number;
}
