import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListPopulationClause } from "./listpopulationclause";



// ListPopulationRule
/** 
 * Remarketing List Population Rule.
**/
export class ListPopulationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightActivityName" })
  floodlightActivityName?: string;

  @SpeakeasyMetadata({ data: "json, name=listPopulationClauses", elemType: ListPopulationClause })
  listPopulationClauses?: ListPopulationClause[];
}
