import { SpeakeasyBase } from "../../../internal/utils";
import { SafeHtmlProto } from "./safehtmlproto";
import { RegionProto } from "./regionproto";
export declare enum SuggestionProtoPriorityEnum {
    UnknownPriority = "unknownPriority",
    Error = "error",
    Warning = "warning",
    Info = "info"
}
export declare class SuggestionProto extends SpeakeasyBase {
    helpUrl?: string;
    longMessage?: SafeHtmlProto;
    priority?: SuggestionProtoPriorityEnum;
    pseudoResourceId?: string;
    region?: RegionProto;
    resourceName?: string;
    screenId?: string;
    secondaryPriority?: number;
    shortMessage?: SafeHtmlProto;
    title?: string;
}
