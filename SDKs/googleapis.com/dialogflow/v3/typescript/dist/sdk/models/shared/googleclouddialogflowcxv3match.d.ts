import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
export declare enum GoogleCloudDialogflowCxV3MatchMatchTypeEnum {
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
export declare class GoogleCloudDialogflowCxV3Match extends SpeakeasyBase {
    confidence?: number;
    event?: string;
    intent?: GoogleCloudDialogflowCxV3Intent;
    matchType?: GoogleCloudDialogflowCxV3MatchMatchTypeEnum;
    parameters?: Map<string, any>;
    resolvedInput?: string;
}
