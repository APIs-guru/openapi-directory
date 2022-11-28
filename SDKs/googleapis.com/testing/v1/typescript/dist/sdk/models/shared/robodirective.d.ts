import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RoboDirectiveActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    SingleClick = "SINGLE_CLICK",
    EnterText = "ENTER_TEXT",
    Ignore = "IGNORE"
}
/**
 * Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
**/
export declare class RoboDirective extends SpeakeasyBase {
    actionType?: RoboDirectiveActionTypeEnum;
    inputText?: string;
    resourceName?: string;
}
