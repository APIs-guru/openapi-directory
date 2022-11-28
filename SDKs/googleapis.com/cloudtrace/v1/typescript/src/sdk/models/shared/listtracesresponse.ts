import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trace } from "./trace";



// ListTracesResponse
/** 
 * The response message for the `ListTraces` method.
**/
export class ListTracesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=traces", elemType: Trace })
  traces?: Trace[];
}
