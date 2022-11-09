import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RoboDirectiveActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED"
,    SingleClick = "SINGLE_CLICK"
,    EnterText = "ENTER_TEXT"
,    Ignore = "IGNORE"
}


// RoboDirective
/** 
 * Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
**/
export class RoboDirective extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType?: RoboDirectiveActionTypeEnum;

  @Metadata({ data: "json, name=inputText" })
  inputText?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
