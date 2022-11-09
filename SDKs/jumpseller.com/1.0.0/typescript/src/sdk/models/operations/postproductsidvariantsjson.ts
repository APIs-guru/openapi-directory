import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsIdVariantsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdVariantsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdVariantsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProductsIdVariantsJsonPathParams;

  @Metadata()
  queryParams: PostProductsIdVariantsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.VariantEdit;
}


export class PostProductsIdVariantsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  variant?: shared.Variant;
}
