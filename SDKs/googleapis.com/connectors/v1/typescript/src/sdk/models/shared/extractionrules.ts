import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtractionRule } from "./extractionrule";



// ExtractionRules
/** 
 * Extraction Rules to identity the backends from customer provided configuration in Connection resource.
**/
export class ExtractionRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extractionRule", elemType: ExtractionRule })
  extractionRule?: ExtractionRule[];
}
