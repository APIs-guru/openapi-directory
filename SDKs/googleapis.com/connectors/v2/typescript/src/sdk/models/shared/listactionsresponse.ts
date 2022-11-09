import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";


// ListActionsResponse
/** 
 * Response message for ActionService.ListActions
**/
export class ListActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unsupportedActionNames" })
  unsupportedActionNames?: string[];
}
