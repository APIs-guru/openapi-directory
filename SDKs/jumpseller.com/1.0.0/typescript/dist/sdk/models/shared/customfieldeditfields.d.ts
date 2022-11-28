import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomFieldEditFieldsTypeEnum {
    Text = "text",
    Selection = "selection",
    Input = "input"
}
export declare class CustomFieldEditFields extends SpeakeasyBase {
    label?: string;
    type?: CustomFieldEditFieldsTypeEnum;
    values?: string[];
}
