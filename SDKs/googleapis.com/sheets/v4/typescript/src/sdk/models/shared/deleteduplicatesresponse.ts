import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDuplicatesResponse
/** 
 * The result of removing duplicates in a range.
**/
export class DeleteDuplicatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=duplicatesRemovedCount" })
  duplicatesRemovedCount?: number;
}
