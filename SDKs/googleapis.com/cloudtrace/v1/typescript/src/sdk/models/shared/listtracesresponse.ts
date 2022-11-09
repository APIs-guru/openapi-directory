import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trace } from "./trace";


// ListTracesResponse
/** 
 * The response message for the `ListTraces` method.
**/
export class ListTracesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=traces", elemType: shared.Trace })
  traces?: Trace[];
}
