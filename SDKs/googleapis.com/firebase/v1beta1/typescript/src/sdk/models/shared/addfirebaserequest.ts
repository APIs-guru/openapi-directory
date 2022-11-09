import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddFirebaseRequest
/** 
 * All fields are required.
**/
export class AddFirebaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationId" })
  locationId?: string;
}
