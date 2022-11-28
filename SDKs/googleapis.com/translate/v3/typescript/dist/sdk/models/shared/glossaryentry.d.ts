import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryTermsPair } from "./glossarytermspair";
import { GlossaryTermsSet } from "./glossarytermsset";
/**
 * Represents a single entry in a glossary.
**/
export declare class GlossaryEntry extends SpeakeasyBase {
    description?: string;
    name?: string;
    termsPair?: GlossaryTermsPair;
    termsSet?: GlossaryTermsSet;
}
