import { SpeakeasyBase } from "../../../internal/utils";
import { Ruleset } from "./ruleset";
/**
 * The response for FirebaseRulesService.ListRulesets.
**/
export declare class ListRulesetsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rulesets?: Ruleset[];
}
