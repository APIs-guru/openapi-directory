import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SiteContactContactTypeEnum {
    SalesPerson = "SALES_PERSON",
    Trafficker = "TRAFFICKER"
}
/**
 * Site Contact
**/
export declare class SiteContact extends SpeakeasyBase {
    address?: string;
    contactType?: SiteContactContactTypeEnum;
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    phone?: string;
    title?: string;
}
