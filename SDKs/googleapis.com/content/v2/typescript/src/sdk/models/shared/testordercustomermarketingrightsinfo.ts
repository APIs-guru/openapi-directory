import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestOrderCustomerMarketingRightsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicitMarketingPreference" })
  explicitMarketingPreference?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;
}
