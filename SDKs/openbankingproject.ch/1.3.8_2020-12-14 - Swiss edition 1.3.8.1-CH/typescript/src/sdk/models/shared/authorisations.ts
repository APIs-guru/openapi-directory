import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Authorisations
/** 
 * An array of all authorisationIds.
**/
export class Authorisations extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorisationIds" })
  authorisationIds: string[];
}
