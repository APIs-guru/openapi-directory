import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resources
/** 
 * A list of FHIR resources.
**/
export class Resources extends SpeakeasyBase {
  @Metadata({ data: "json, name=resources" })
  resources?: string[];
}
