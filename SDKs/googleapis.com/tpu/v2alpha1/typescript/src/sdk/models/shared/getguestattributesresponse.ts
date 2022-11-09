import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GuestAttributes } from "./guestattributes";


// GetGuestAttributesResponse
/** 
 * Response for GetGuestAttributes.
**/
export class GetGuestAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=guestAttributes", elemType: shared.GuestAttributes })
  guestAttributes?: GuestAttributes[];
}
