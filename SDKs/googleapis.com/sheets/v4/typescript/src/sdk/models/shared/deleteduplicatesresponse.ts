import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDuplicatesResponse
/** 
 * The result of removing duplicates in a range.
**/
export class DeleteDuplicatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicatesRemovedCount" })
  duplicatesRemovedCount?: number;
}
