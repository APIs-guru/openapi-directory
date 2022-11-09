import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trigger } from "./trigger";


// ListTriggersResponse
/** 
 * List triggers response.
**/
export class ListTriggersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=trigger", elemType: shared.Trigger })
  trigger?: Trigger[];
}
