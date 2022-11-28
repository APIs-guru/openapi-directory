import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RoboDirectiveActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    SingleClick = "SINGLE_CLICK",
    EnterText = "ENTER_TEXT",
    Ignore = "IGNORE"
}


// RoboDirective
/** 
 * Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
**/
export class RoboDirective extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: RoboDirectiveActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=inputText" })
  inputText?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
