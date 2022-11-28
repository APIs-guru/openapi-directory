import { SpeakeasyBase } from "../../../internal/utils";
import { ActionConfirmationBody } from "./actionconfirmationbody";
export declare enum ActionHookActionBodyHttpMethodEnum {
    Connect = "CONNECT",
    Delete = "DELETE",
    Get = "GET",
    Head = "HEAD",
    Options = "OPTIONS",
    Patch = "PATCH",
    Post = "POST",
    Put = "PUT",
    Trace = "TRACE"
}
export declare enum ActionHookActionBodyTypeEnum {
    ActionHook = "ACTION_HOOK"
}
export declare class ActionHookActionBody extends SpeakeasyBase {
    confirmation?: ActionConfirmationBody;
    httpMethod: ActionHookActionBodyHttpMethodEnum;
    label?: string;
    propertyNamesIncluded: string[];
    type: ActionHookActionBodyTypeEnum;
    url: string;
}
