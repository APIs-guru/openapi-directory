import { SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionValueFields } from "./productoptionvaluefields";
export declare enum ProductOptionFieldsOptionTypeEnum {
    Option = "option",
    Input = "input",
    Text = "text",
    File = "file"
}
export declare class ProductOptionFields extends SpeakeasyBase {
    id?: number;
    name?: string;
    optionType?: ProductOptionFieldsOptionTypeEnum;
    position?: number;
    values?: ProductOptionValueFields[];
}
