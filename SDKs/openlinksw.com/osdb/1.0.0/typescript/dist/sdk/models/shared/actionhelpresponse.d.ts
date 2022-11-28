import { SpeakeasyBase } from "../../../internal/utils";
import { ActionHelp } from "./actionhelp";
export declare enum ActionHelpResponseStatusEnum {
    Success = "success"
}
export declare class ActionHelpResponse extends SpeakeasyBase {
    api: string;
    method: string;
    response: ActionHelp;
    status: ActionHelpResponseStatusEnum;
}
