import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";


// ExtractionRule
/** 
 * Extraction Rule.
**/
export class ExtractionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=extractionRegex" })
  extractionRegex?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
