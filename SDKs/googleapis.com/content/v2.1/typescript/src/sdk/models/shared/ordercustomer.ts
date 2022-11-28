import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderCustomerLoyaltyInfo } from "./ordercustomerloyaltyinfo";
import { OrderCustomerMarketingRightsInfo } from "./ordercustomermarketingrightsinfo";



export class OrderCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceReceivingEmail" })
  invoiceReceivingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=loyaltyInfo" })
  loyaltyInfo?: OrderCustomerLoyaltyInfo;

  @SpeakeasyMetadata({ data: "json, name=marketingRightsInfo" })
  marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
}
