import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProperNounCategorizedOut } from "./propernouncategorizedout";



// BatchProperNounCategorizedOut
/** 
 * Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
**/
export class BatchProperNounCategorizedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properNouns", elemType: ProperNounCategorizedOut })
  properNouns?: ProperNounCategorizedOut[];
}
