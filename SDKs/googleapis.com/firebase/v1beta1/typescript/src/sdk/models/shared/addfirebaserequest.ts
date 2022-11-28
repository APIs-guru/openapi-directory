import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddFirebaseRequest
/** 
 * All fields are required.
**/
export class AddFirebaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;
}
