import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdVariantsVariantIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variant_id" })
  variantId: number;
}


export class GetProductsIdVariantsVariantIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdVariantsVariantIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdVariantsVariantIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdVariantsVariantIdJsonQueryParams;
}


export class GetProductsIdVariantsVariantIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  variant?: shared.Variant;
}
