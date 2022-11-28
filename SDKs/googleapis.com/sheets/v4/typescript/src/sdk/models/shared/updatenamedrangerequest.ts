import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedRange } from "./namedrange";



// UpdateNamedRangeRequest
/** 
 * Updates properties of the named range with the specified namedRangeId.
**/
export class UpdateNamedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=namedRange" })
  namedRange?: NamedRange;
}
