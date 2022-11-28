import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetProductsSearchJsonFieldsEnum {
    Sku = "sku",
    Barcode = "barcode",
    Brand = "brand",
    Name = "name",
    Description = "description",
    Variants = "variants",
    OptionName = "option_name",
    CustomFields = "custom_fields",
    CustomFieldsSelects = "custom_fields_selects"
}


export class GetProductsSearchJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: GetProductsSearchJsonFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetProductsSearchJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProductsSearchJsonQueryParams;
}


export class GetProductsSearchJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata({ elemType: shared.Product })
  products?: shared.Product[];

  @SpeakeasyMetadata()
  statusCode: number;
}
