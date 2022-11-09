import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductsApiListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class ProductsApiListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ProductsApiListQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProductView })
  productViews?: shared.ProductView[];

  @Metadata()
  statusCode: number;
}
