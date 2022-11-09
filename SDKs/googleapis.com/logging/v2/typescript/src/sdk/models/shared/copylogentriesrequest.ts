import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CopyLogEntriesRequest
/** 
 * The parameters to CopyLogEntries.
**/
export class CopyLogEntriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
