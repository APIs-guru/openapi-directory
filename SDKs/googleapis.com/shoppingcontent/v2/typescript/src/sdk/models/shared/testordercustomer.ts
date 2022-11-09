import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestOrderCustomerMarketingRightsInfo } from "./testordercustomermarketingrightsinfo";


export class TestOrderCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=explicitMarketingPreference" })
  explicitMarketingPreference?: boolean;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=marketingRightsInfo" })
  marketingRightsInfo?: TestOrderCustomerMarketingRightsInfo;
}
