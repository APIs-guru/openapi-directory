import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShippingMethodEditShippingMethod extends SpeakeasyBase {
    callbackUrl?: string;
    city?: string;
    fetchServicesUrl?: string;
    name?: string;
    postal?: string;
    state?: string;
    token?: string;
}
export declare class ShippingMethodEdit extends SpeakeasyBase {
    shippingMethod?: ShippingMethodEditShippingMethod;
}
