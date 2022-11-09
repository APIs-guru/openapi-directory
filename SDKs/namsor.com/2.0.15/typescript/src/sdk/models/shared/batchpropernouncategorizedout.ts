import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProperNounCategorizedOut } from "./propernouncategorizedout";


// BatchProperNounCategorizedOut
/** 
 * Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
**/
export class BatchProperNounCategorizedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=properNouns", elemType: shared.ProperNounCategorizedOut })
  properNouns?: ProperNounCategorizedOut[];
}
