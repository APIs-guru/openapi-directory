import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssociateLocationRequest
/** 
 * Request message for Locations.AssociateLocationRequest.
**/
export class AssociateLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=placeId" })
  placeId?: string;
}
