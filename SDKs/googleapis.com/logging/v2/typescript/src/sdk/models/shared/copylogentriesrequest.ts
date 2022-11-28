import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CopyLogEntriesRequest
/** 
 * The parameters to CopyLogEntries.
**/
export class CopyLogEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
