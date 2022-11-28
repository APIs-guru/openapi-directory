import { SpeakeasyBase } from "../../../internal/utils";
import { ListPopulationTerm } from "./listpopulationterm";
/**
 * A group clause made up of list population terms representing constraints joined by ORs.
**/
export declare class ListPopulationClause extends SpeakeasyBase {
    terms?: ListPopulationTerm[];
}
