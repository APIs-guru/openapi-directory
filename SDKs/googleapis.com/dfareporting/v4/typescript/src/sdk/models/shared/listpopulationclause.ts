import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListPopulationTerm } from "./listpopulationterm";


// ListPopulationClause
/** 
 * A group clause made up of list population terms representing constraints joined by ORs.
**/
export class ListPopulationClause extends SpeakeasyBase {
  @Metadata({ data: "json, name=terms", elemType: shared.ListPopulationTerm })
  terms?: ListPopulationTerm[];
}
