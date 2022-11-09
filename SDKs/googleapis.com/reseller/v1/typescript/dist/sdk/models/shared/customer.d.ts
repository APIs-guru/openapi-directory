import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { PrimaryAdmin } from "./primaryadmin";
export declare enum CustomerCustomerTypeEnum {
    CustomerTypeUnspecified = "customerTypeUnspecified",
    Domain = "domain",
    Team = "team"
}
/**
 * When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.
**/
export declare class Customer extends SpeakeasyBase {
    alternateEmail?: string;
    customerDomain?: string;
    customerDomainVerified?: boolean;
    customerId?: string;
    customerType?: CustomerCustomerTypeEnum;
    kind?: string;
    phoneNumber?: string;
    postalAddress?: Address;
    primaryAdmin?: PrimaryAdmin;
    resourceUiUrl?: string;
}
