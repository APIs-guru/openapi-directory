import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAdditionalField } from "./customeradditionalfield";
import { CustomerCategory } from "./customercategory";
export declare enum CustomerFieldsStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Disabled = "disabled"
}
export declare class CustomerFields extends SpeakeasyBase {
    billingAddress?: any;
    customerAdditionalFields?: CustomerAdditionalField[];
    customerCategories?: CustomerCategory[];
    email?: string;
    id?: number;
    name?: string;
    phone?: string;
    shippingAddress?: any;
    status?: CustomerFieldsStatusEnum;
    surname?: string;
}
