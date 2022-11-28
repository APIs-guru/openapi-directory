import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Resources
/** 
 * A list of FHIR resources.
**/
export class Resources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];
}
