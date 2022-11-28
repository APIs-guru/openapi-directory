import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig } from "./googlecloudcontactcenterinsightsv1phrasematchruleconfig";



// GoogleCloudContactcenterinsightsV1PhraseMatchRule
/** 
 * The data for a phrase match rule.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatchRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig;

  @SpeakeasyMetadata({ data: "json, name=negated" })
  negated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
