import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteProtectedRangeRequest
/** 
 * Deletes the protected range with the given ID.
**/
export class DeleteProtectedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=protectedRangeId" })
  protectedRangeId?: number;
}
