import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class GetProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdOptionsOptionIdValuesValueIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;
}


export class GetProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  productOptionValue?: shared.ProductOptionValue;

  @Metadata()
  statusCode: number;
}
