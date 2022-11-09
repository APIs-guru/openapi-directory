import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1ExactMatchConfig } from "./googlecloudcontactcenterinsightsv1exactmatchconfig";


// GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig
/** 
 * Configuration information of a phrase match rule.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exactMatchConfig" })
  exactMatchConfig?: GoogleCloudContactcenterinsightsV1ExactMatchConfig;
}
