import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductOptionEditFieldsOptionTypeEnum {
    Option = "option",
    Input = "input",
    Text = "text",
    File = "file"
}
export declare class ProductOptionEditFields extends SpeakeasyBase {
    name?: string;
    optionType?: ProductOptionEditFieldsOptionTypeEnum;
    position?: number;
}
