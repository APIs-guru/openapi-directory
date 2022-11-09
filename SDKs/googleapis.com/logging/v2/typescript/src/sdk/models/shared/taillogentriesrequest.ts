import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TailLogEntriesRequest
/** 
 * The parameters to TailLogEntries.
**/
export class TailLogEntriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bufferWindow" })
  bufferWindow?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
