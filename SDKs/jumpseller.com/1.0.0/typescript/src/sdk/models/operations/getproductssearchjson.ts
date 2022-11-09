import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetProductsSearchJsonFieldsEnum {
    Sku = "sku"
,    Barcode = "barcode"
,    Brand = "brand"
,    Name = "name"
,    Description = "description"
,    Variants = "variants"
,    OptionName = "option_name"
,    CustomFields = "custom_fields"
,    CustomFieldsSelects = "custom_fields_selects"
}


export class GetProductsSearchJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: GetProductsSearchJsonFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetProductsSearchJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProductsSearchJsonQueryParams;
}


export class GetProductsSearchJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata({ elemType: shared.Product })
  products?: shared.Product[];

  @Metadata()
  statusCode: number;
}
