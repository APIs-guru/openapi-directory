import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionValueFields } from "./productoptionvaluefields";


export enum ProductOptionFieldsOptionTypeEnum {
    Option = "option",
    Input = "input",
    Text = "text",
    File = "file"
}


export class ProductOptionFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=option_type" })
  optionType?: ProductOptionFieldsOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: ProductOptionValueFields })
  values?: ProductOptionValueFields[];
}
