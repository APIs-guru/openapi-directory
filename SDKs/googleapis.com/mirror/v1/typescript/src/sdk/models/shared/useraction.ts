import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserAction
/** 
 * Represents an action taken by the user that triggered a notification.
**/
export class UserAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
