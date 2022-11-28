import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class PutProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProductsIdOptionsOptionIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PutProductsIdOptionsOptionIdJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionEdit;
}


export class PutProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  productOption?: shared.ProductOption;

  @SpeakeasyMetadata()
  statusCode: number;
}
