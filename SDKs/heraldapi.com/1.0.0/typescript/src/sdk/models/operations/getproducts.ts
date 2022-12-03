import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=producer_id" })
  producerId?: string;
}


export class GetProducts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products", elemType: shared.ProductV1 })
  products?: shared.ProductV1[];
}


export class GetProducts400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorV1 })
  errors?: shared.ErrorV1[];
}


export class GetProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProductsQueryParams;
}


export class GetProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProducts200ApplicationJsonObject?: GetProducts200ApplicationJson;

  @SpeakeasyMetadata()
  getProducts400ApplicationJsonObject?: GetProducts400ApplicationJson;
}
