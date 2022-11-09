import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RerouteLineRequest
/** 
 * Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
**/
export class RerouteLineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
