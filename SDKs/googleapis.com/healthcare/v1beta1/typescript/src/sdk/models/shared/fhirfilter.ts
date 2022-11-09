import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Resources } from "./resources";


// FhirFilter
/** 
 * Filter configuration.
**/
export class FhirFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=resources" })
  resources?: Resources;
}
