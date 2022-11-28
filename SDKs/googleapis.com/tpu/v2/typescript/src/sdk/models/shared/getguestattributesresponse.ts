import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestAttributes } from "./guestattributes";



// GetGuestAttributesResponse
/** 
 * Response for GetGuestAttributes.
**/
export class GetGuestAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guestAttributes", elemType: GuestAttributes })
  guestAttributes?: GuestAttributes[];
}
