import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CheckoutCustomFieldFieldsAreaEnum {
    Contact = "contact",
    BillingShipping = "billing_shipping",
    Other = "other"
}
export declare enum CheckoutCustomFieldFieldsTypeEnum {
    Text = "text",
    Select = "select",
    Input = "input",
    Checkbox = "checkbox"
}
export declare class CheckoutCustomFieldFields extends SpeakeasyBase {
    area?: CheckoutCustomFieldFieldsAreaEnum;
    customFieldSelectOptions?: string[];
    deletable?: boolean;
    id?: number;
    label?: string;
    position?: number;
    required?: boolean;
    type?: CheckoutCustomFieldFieldsTypeEnum;
}
