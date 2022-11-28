import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingService } from "./shippingservice";
export declare enum ShippingMethodFieldsTypeEnum {
    Free = "free",
    Tables = "tables",
    Correiosbr = "correiosbr",
    CorreosChile = "correos_chile",
    Chilexpress = "chilexpress",
    Flat = "flat",
    Ups = "ups",
    External = "external"
}
export declare class ShippingMethodFields extends SpeakeasyBase {
    callbackUrl?: string;
    city?: string;
    fetchServicesUrl?: string;
    id?: number;
    name?: string;
    postal?: string;
    services?: ShippingService[];
    state?: string;
    type?: ShippingMethodFieldsTypeEnum;
}
