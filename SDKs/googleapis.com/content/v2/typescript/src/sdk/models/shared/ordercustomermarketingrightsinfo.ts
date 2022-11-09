import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderCustomerMarketingRightsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=explicitMarketingPreference" })
  explicitMarketingPreference?: string;

  @Metadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;

  @Metadata({ data: "json, name=marketingEmailAddress" })
  marketingEmailAddress?: string;
}
