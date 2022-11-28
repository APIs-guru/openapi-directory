import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteNamedRangeRequest
/** 
 * Deletes a NamedRange.
**/
export class DeleteNamedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;
}
