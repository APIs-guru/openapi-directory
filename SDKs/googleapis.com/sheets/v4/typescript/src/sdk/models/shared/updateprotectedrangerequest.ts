import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectedRange } from "./protectedrange";


// UpdateProtectedRangeRequest
/** 
 * Updates an existing protected range with the specified protectedRangeId.
**/
export class UpdateProtectedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=protectedRange" })
  protectedRange?: ProtectedRange;
}
