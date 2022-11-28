import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
export declare enum GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    DirectIntent = "DIRECT_INTENT",
    ParameterFilling = "PARAMETER_FILLING",
    NoMatch = "NO_MATCH",
    NoInput = "NO_INPUT",
    Event = "EVENT"
}
/**
 * Represents one match result of MatchIntent.
**/
export declare class GoogleCloudDialogflowCxV3beta1Match extends SpeakeasyBase {
    confidence?: number;
    event?: string;
    intent?: GoogleCloudDialogflowCxV3beta1Intent;
    matchType?: GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum;
    parameters?: Map<string, any>;
    resolvedInput?: string;
}
