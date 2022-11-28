import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryTerm } from "./glossaryterm";
/**
 * Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
**/
export declare class GlossaryTermsSet extends SpeakeasyBase {
    terms?: GlossaryTerm[];
}
