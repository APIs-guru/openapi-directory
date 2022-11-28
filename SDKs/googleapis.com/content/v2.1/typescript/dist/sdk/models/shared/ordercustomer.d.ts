import { SpeakeasyBase } from "../../../internal/utils";
import { OrderCustomerLoyaltyInfo } from "./ordercustomerloyaltyinfo";
import { OrderCustomerMarketingRightsInfo } from "./ordercustomermarketingrightsinfo";
export declare class OrderCustomer extends SpeakeasyBase {
    fullName?: string;
    invoiceReceivingEmail?: string;
    loyaltyInfo?: OrderCustomerLoyaltyInfo;
    marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
}
