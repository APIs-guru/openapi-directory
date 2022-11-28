import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resources } from "./resources";



// FhirFilter
/** 
 * Filter configuration.
**/
export class FhirFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: Resources;
}
