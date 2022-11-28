import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TailLogEntriesRequest
/** 
 * The parameters to TailLogEntries.
**/
export class TailLogEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bufferWindow" })
  bufferWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
