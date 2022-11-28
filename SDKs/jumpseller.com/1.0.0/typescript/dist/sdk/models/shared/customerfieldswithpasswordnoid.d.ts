import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomerFieldsWithPasswordNoIdStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Disabled = "disabled"
}
export declare class CustomerFieldsWithPasswordNoId extends SpeakeasyBase {
    billingAddress?: any;
    customerCategory?: number[];
    email?: string;
    password?: string;
    phone?: string;
    shippingAddress?: any;
    status?: CustomerFieldsWithPasswordNoIdStatusEnum;
}
