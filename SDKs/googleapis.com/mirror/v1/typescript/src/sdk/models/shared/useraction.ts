import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserAction
/** 
 * Represents an action taken by the user that triggered a notification.
**/
export class UserAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
