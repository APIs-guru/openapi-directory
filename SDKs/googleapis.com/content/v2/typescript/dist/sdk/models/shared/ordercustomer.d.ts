import { SpeakeasyBase } from "../../../internal/utils";
import { OrderCustomerMarketingRightsInfo } from "./ordercustomermarketingrightsinfo";
export declare class OrderCustomer extends SpeakeasyBase {
    email?: string;
    explicitMarketingPreference?: boolean;
    fullName?: string;
    invoiceReceivingEmail?: string;
    marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
}
