import { SpeakeasyBase } from "../../../internal/utils";
import { OrderContact } from "./ordercontact";
import { LastModifiedInfo } from "./lastmodifiedinfo";
/**
 * Describes properties of a Planning order.
**/
export declare class Order extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    approverUserProfileIds?: string[];
    buyerInvoiceId?: string;
    buyerOrganizationName?: string;
    comments?: string;
    contacts?: OrderContact[];
    id?: string;
    kind?: string;
    lastModifiedInfo?: LastModifiedInfo;
    name?: string;
    notes?: string;
    planningTermId?: string;
    projectId?: string;
    sellerOrderId?: string;
    sellerOrganizationName?: string;
    siteId?: string[];
    siteNames?: string[];
    subaccountId?: string;
    termsAndConditions?: string;
}
