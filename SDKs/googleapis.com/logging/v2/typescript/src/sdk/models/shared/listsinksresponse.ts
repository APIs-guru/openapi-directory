import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogSink } from "./logsink";


// ListSinksResponse
/** 
 * Result returned from ListSinks.
**/
export class ListSinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sinks", elemType: shared.LogSink })
  sinks?: LogSink[];
}
