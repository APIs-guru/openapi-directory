import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProductsIdVariantsVariantIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variant_id" })
  variantId: number;
}


export class PutProductsIdVariantsVariantIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsIdVariantsVariantIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProductsIdVariantsVariantIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PutProductsIdVariantsVariantIdJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.VariantEdit;
}


export class PutProductsIdVariantsVariantIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  variant?: shared.Variant;
}
