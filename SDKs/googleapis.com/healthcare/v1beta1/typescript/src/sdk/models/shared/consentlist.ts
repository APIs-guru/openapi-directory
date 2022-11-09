import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConsentList
/** 
 * List of resource names of Consent resources.
**/
export class ConsentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=consents" })
  consents?: string[];
}
