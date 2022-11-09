import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdOptionsOptionIdValuesJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class GetProductsIdOptionsOptionIdValuesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdOptionsOptionIdValuesJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdOptionsOptionIdValuesJsonQueryParams;
}


export class GetProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata({ elemType: shared.ProductOptionValue })
  productOptionValues?: shared.ProductOptionValue[];

  @Metadata()
  statusCode: number;
}
