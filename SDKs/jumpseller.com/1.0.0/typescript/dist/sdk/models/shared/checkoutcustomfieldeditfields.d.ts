import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CheckoutCustomFieldEditFieldsAreaEnum {
    Contact = "contact",
    BillingShipping = "billing_shipping",
    Other = "other"
}
export declare enum CheckoutCustomFieldEditFieldsTypeEnum {
    Text = "text",
    Select = "select",
    Input = "input",
    Checkbox = "checkbox",
    Date = "date"
}
export declare class CheckoutCustomFieldEditFields extends SpeakeasyBase {
    area?: CheckoutCustomFieldEditFieldsAreaEnum;
    customFieldSelectOptions?: string[];
    deletable?: boolean;
    label?: string;
    position?: number;
    required?: boolean;
    type?: CheckoutCustomFieldEditFieldsTypeEnum;
}
