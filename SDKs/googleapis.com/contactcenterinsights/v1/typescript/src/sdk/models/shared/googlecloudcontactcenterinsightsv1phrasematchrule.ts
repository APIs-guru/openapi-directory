import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig } from "./googlecloudcontactcenterinsightsv1phrasematchruleconfig";


// GoogleCloudContactcenterinsightsV1PhraseMatchRule
/** 
 * The data for a phrase match rule.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatchRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig;

  @Metadata({ data: "json, name=negated" })
  negated?: boolean;

  @Metadata({ data: "json, name=query" })
  query?: string;
}
