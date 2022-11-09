import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Queue } from "./queue";


// ListQueuesResponse
/** 
 * Response message for ListQueues.
**/
export class ListQueuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=queues", elemType: shared.Queue })
  queues?: Queue[];
}
