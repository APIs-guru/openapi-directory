import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExtractionRule } from "./extractionrule";


// ExtractionRules
/** 
 * Extraction Rules to identity the backends from customer provided configuration in Connection resource.
**/
export class ExtractionRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=extractionRule", elemType: shared.ExtractionRule })
  extractionRule?: ExtractionRule[];
}
