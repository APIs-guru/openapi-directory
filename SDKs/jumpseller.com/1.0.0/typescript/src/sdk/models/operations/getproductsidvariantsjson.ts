import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsIdVariantsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdVariantsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdVariantsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsIdVariantsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsIdVariantsJsonQueryParams;
}


export class GetProductsIdVariantsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Variant })
  variants?: shared.Variant[];
}
