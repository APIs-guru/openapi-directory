import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ruleset } from "./ruleset";



// ListRulesetsResponse
/** 
 * The response for FirebaseRulesService.ListRulesets.
**/
export class ListRulesetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesets", elemType: Ruleset })
  rulesets?: Ruleset[];
}
