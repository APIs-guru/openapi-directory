import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProductsIdVariantsVariantIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variant_id" })
  variantId: number;
}


export class PutProductsIdVariantsVariantIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsIdVariantsVariantIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProductsIdVariantsVariantIdJsonPathParams;

  @Metadata()
  queryParams: PutProductsIdVariantsVariantIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.VariantEdit;
}


export class PutProductsIdVariantsVariantIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  variant?: shared.Variant;
}
