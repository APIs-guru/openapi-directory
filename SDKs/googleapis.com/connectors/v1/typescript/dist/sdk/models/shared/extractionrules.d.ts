import { SpeakeasyBase } from "../../../internal/utils";
import { ExtractionRule } from "./extractionrule";
/**
 * Extraction Rules to identity the backends from customer provided configuration in Connection resource.
**/
export declare class ExtractionRules extends SpeakeasyBase {
    extractionRule?: ExtractionRule[];
}
