import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteNamedRangeRequest
/** 
 * Deletes a NamedRange.
**/
export class DeleteNamedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;
}
