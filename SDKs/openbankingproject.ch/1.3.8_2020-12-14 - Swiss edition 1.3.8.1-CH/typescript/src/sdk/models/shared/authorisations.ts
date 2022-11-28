import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Authorisations
/** 
 * An array of all authorisationIds.
**/
export class Authorisations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorisationIds" })
  authorisationIds: string[];
}
