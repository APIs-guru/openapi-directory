import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectedRange } from "./protectedrange";



// UpdateProtectedRangeRequest
/** 
 * Updates an existing protected range with the specified protectedRangeId.
**/
export class UpdateProtectedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=protectedRange" })
  protectedRange?: ProtectedRange;
}
