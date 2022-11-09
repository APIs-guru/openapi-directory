import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductOptionValueFields } from "./productoptionvaluefields";

export enum ProductOptionFieldsOptionTypeEnum {
    Option = "option"
,    Input = "input"
,    Text = "text"
,    File = "file"
}


export class ProductOptionFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=option_type" })
  optionType?: ProductOptionFieldsOptionTypeEnum;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=values", elemType: shared.ProductOptionValueFields })
  values?: ProductOptionValueFields[];
}
