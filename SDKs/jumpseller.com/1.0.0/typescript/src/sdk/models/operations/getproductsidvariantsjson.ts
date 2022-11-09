import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdVariantsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdVariantsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdVariantsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdVariantsJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdVariantsJsonQueryParams;
}


export class GetProductsIdVariantsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Variant })
  variants?: shared.Variant[];
}
