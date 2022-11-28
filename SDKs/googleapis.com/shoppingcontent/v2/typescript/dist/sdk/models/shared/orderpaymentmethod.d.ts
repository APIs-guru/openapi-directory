import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";
export declare class OrderPaymentMethod extends SpeakeasyBase {
    billingAddress?: OrderAddress;
    expirationMonth?: number;
    expirationYear?: number;
    lastFourDigits?: string;
    phoneNumber?: string;
    type?: string;
}
