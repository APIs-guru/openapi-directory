import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class GetProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsIdOptionsOptionIdValuesValueIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;
}


export class GetProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  productOptionValue?: shared.ProductOptionValue;

  @SpeakeasyMetadata()
  statusCode: number;
}
