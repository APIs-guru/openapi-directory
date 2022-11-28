import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderCustomerMarketingRightsInfo } from "./ordercustomermarketingrightsinfo";



export class OrderCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=explicitMarketingPreference" })
  explicitMarketingPreference?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceReceivingEmail" })
  invoiceReceivingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingRightsInfo" })
  marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
}
