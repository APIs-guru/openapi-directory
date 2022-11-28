import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConsentList
/** 
 * List of resource names of Consent resources.
**/
export class ConsentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consents" })
  consents?: string[];
}
