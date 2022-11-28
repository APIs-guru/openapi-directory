import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateNamedRangeResponse
/** 
 * The result of creating a named range.
**/
export class CreateNamedRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;
}
