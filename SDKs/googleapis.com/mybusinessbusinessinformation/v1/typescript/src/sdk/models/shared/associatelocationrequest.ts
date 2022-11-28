import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateLocationRequest
/** 
 * Request message for Locations.AssociateLocationRequest.
**/
export class AssociateLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;
}
