import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ExactMatchConfig } from "./googlecloudcontactcenterinsightsv1exactmatchconfig";



// GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig
/** 
 * Configuration information of a phrase match rule.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exactMatchConfig" })
  exactMatchConfig?: GoogleCloudContactcenterinsightsV1ExactMatchConfig;
}
