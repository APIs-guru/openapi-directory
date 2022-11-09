import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class PutProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProductsIdOptionsOptionIdValuesValueIdJsonPathParams;

  @Metadata()
  queryParams: PutProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionValueEdit;
}


export class PutProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  productOptionValue?: shared.ProductOptionValue;

  @Metadata()
  statusCode: number;
}
