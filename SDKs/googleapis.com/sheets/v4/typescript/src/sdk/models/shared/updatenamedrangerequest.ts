import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamedRange } from "./namedrange";


// UpdateNamedRangeRequest
/** 
 * Updates properties of the named range with the specified namedRangeId.
**/
export class UpdateNamedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=namedRange" })
  namedRange?: NamedRange;
}
