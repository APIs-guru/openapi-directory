import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsIdOptionsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdOptionsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsIdOptionsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsIdOptionsJsonQueryParams;
}


export class GetProductsIdOptionsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata({ elemType: shared.ProductOption })
  productOptions?: shared.ProductOption[];

  @SpeakeasyMetadata()
  statusCode: number;
}
