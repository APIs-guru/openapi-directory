import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductsIdOptionsOptionIdValuesValueIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;
}


export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProductsIdOptionsOptionIdValuesValueIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
