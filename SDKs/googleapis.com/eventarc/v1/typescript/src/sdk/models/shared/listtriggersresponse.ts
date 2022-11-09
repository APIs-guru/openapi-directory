import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trigger } from "./trigger";


// ListTriggersResponse
/** 
 * The response message for the `ListTriggers` method.
**/
export class ListTriggersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=triggers", elemType: shared.Trigger })
  triggers?: Trigger[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
