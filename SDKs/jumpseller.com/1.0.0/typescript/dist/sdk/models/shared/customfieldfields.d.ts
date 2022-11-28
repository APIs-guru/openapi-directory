import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomFieldFieldsTypeEnum {
    Text = "text",
    Selection = "selection",
    Input = "input"
}
export declare class CustomFieldFields extends SpeakeasyBase {
    id?: number;
    label?: string;
    type?: CustomFieldFieldsTypeEnum;
    values?: string[];
}
