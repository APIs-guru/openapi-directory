import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogSink } from "./logsink";



// ListSinksResponse
/** 
 * Result returned from ListSinks.
**/
export class ListSinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sinks", elemType: LogSink })
  sinks?: LogSink[];
}
