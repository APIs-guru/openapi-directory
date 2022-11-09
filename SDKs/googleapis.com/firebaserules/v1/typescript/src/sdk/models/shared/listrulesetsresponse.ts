import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ruleset } from "./ruleset";


// ListRulesetsResponse
/** 
 * The response for FirebaseRulesService.ListRulesets.
**/
export class ListRulesetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rulesets", elemType: shared.Ruleset })
  rulesets?: Ruleset[];
}
