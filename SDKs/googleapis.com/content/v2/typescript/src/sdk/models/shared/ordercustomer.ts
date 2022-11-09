import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderCustomerMarketingRightsInfo } from "./ordercustomermarketingrightsinfo";


export class OrderCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=explicitMarketingPreference" })
  explicitMarketingPreference?: boolean;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=invoiceReceivingEmail" })
  invoiceReceivingEmail?: string;

  @Metadata({ data: "json, name=marketingRightsInfo" })
  marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
}
