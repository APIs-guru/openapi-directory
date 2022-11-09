import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateNamedRangeResponse
/** 
 * The result of creating a named range.
**/
export class CreateNamedRangeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;
}
