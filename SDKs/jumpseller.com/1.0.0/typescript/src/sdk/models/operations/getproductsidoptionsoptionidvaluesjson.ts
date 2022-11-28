import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsIdOptionsOptionIdValuesJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class GetProductsIdOptionsOptionIdValuesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsIdOptionsOptionIdValuesJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsIdOptionsOptionIdValuesJsonQueryParams;
}


export class GetProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata({ elemType: shared.ProductOptionValue })
  productOptionValues?: shared.ProductOptionValue[];

  @SpeakeasyMetadata()
  statusCode: number;
}
