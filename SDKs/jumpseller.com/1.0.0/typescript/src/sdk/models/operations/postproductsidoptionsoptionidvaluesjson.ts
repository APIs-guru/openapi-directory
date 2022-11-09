import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsIdOptionsOptionIdValuesJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class PostProductsIdOptionsOptionIdValuesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProductsIdOptionsOptionIdValuesJsonPathParams;

  @Metadata()
  queryParams: PostProductsIdOptionsOptionIdValuesJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionValueEdit;
}


export class PostProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productOptionValue?: shared.ProductOptionValue;

  @Metadata()
  statusCode: number;
}
