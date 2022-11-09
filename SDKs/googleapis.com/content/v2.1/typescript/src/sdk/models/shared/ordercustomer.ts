import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderCustomerLoyaltyInfo } from "./ordercustomerloyaltyinfo";
import { OrderCustomerMarketingRightsInfo } from "./ordercustomermarketingrightsinfo";


export class OrderCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=invoiceReceivingEmail" })
  invoiceReceivingEmail?: string;

  @Metadata({ data: "json, name=loyaltyInfo" })
  loyaltyInfo?: OrderCustomerLoyaltyInfo;

  @Metadata({ data: "json, name=marketingRightsInfo" })
  marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
}
