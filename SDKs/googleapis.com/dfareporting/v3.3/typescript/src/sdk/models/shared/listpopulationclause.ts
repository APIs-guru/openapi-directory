import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListPopulationTerm } from "./listpopulationterm";



// ListPopulationClause
/** 
 * A group clause made up of list population terms representing constraints joined by ORs.
**/
export class ListPopulationClause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=terms", elemType: ListPopulationTerm })
  terms?: ListPopulationTerm[];
}
