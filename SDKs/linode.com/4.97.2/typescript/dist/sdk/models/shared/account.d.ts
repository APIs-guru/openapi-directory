import { SpeakeasyBase } from "../../../internal/utils";
import { Promotion } from "./promotion";
/**
 * Credit Card information associated with this Account.
**/
export declare class AccountCreditCard extends SpeakeasyBase {
    expiry?: string;
    lastFour?: string;
}
/**
 * Account object
**/
export declare class AccountInput extends SpeakeasyBase {
    activePromotions?: Promotion[];
    address1?: string;
    address2?: string;
    city?: string;
    company?: string;
    country?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    state?: string;
    taxId?: string;
    zip?: string;
}
/**
 * Account object
**/
export declare class Account extends SpeakeasyBase {
    activePromotions?: Promotion[];
    activeSince?: Date;
    address1?: string;
    address2?: string;
    balance?: number;
    balanceUninvoiced?: number;
    capabilities?: string[];
    city?: string;
    company?: string;
    country?: string;
    creditCard?: AccountCreditCard;
    email?: string;
    euuid?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    state?: string;
    taxId?: string;
    zip?: string;
}
