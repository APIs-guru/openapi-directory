import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TraceSink } from "./tracesink";



// ListTraceSinksResponse
/** 
 * Result returned from `ListTraceSinks`.
**/
export class ListTraceSinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sinks", elemType: TraceSink })
  sinks?: TraceSink[];
}
