import { SpeakeasyBase } from "../../../internal/utils";
import { ListPopulationClause } from "./listpopulationclause";
/**
 * Remarketing List Population Rule.
**/
export declare class ListPopulationRule extends SpeakeasyBase {
    floodlightActivityId?: string;
    floodlightActivityName?: string;
    listPopulationClauses?: ListPopulationClause[];
}
