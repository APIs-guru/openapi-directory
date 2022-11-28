import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteProtectedRangeRequest
/** 
 * Deletes the protected range with the given ID.
**/
export class DeleteProtectedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=protectedRangeId" })
  protectedRangeId?: number;
}
