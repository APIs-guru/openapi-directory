import { SpeakeasyBase } from "../../../internal/utils";
import { ProperNounCategorizedOut } from "./propernouncategorizedout";
/**
 * Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
**/
export declare class BatchProperNounCategorizedOut extends SpeakeasyBase {
    properNouns?: ProperNounCategorizedOut[];
}
