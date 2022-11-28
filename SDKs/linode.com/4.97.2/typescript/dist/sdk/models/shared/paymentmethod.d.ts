import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Credit card information.
**/
export declare class PaymentMethodData extends SpeakeasyBase {
    cardType?: string;
    expiry?: string;
    lastFour?: string;
}
export declare enum PaymentMethodTypeEnum {
    CreditCard = "credit_card"
}
/**
 * Payment Method Response Object.
**/
export declare class PaymentMethod extends SpeakeasyBase {
    created?: Date;
    data?: PaymentMethodData;
    isDefault?: boolean;
    type?: PaymentMethodTypeEnum;
}
