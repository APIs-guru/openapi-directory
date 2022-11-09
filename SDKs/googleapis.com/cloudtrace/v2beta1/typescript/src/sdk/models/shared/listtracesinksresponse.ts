import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TraceSink } from "./tracesink";


// ListTraceSinksResponse
/** 
 * Result returned from `ListTraceSinks`.
**/
export class ListTraceSinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sinks", elemType: shared.TraceSink })
  sinks?: TraceSink[];
}
