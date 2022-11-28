import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductsApiListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class ProductsApiListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProductsApiListQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ProductView })
  productViews?: shared.ProductView[];

  @SpeakeasyMetadata()
  statusCode: number;
}
