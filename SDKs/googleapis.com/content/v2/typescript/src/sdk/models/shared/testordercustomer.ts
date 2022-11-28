import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrderCustomerMarketingRightsInfo } from "./testordercustomermarketingrightsinfo";



export class TestOrderCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=explicitMarketingPreference" })
  explicitMarketingPreference?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingRightsInfo" })
  marketingRightsInfo?: TestOrderCustomerMarketingRightsInfo;
}
