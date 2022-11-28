import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";



// ExtractionRule
/** 
 * Extraction Rule.
**/
export class ExtractionRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extractionRegex" })
  extractionRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
