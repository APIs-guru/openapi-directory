import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListPopulationClause } from "./listpopulationclause";


// ListPopulationRule
/** 
 * Remarketing List Population Rule.
**/
export class ListPopulationRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @Metadata({ data: "json, name=floodlightActivityName" })
  floodlightActivityName?: string;

  @Metadata({ data: "json, name=listPopulationClauses", elemType: shared.ListPopulationClause })
  listPopulationClauses?: ListPopulationClause[];
}
