import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderCustomerMarketingRightsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicitMarketingPreference" })
  explicitMarketingPreference?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingEmailAddress" })
  marketingEmailAddress?: string;
}
