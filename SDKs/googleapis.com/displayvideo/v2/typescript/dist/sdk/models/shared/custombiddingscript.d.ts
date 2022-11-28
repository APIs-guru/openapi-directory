import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingScriptRef } from "./custombiddingscriptref";
import { ScriptError } from "./scripterror";
export declare enum CustomBiddingScriptStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Pending = "PENDING"
}
/**
 * A single custom bidding script.
**/
export declare class CustomBiddingScriptInput extends SpeakeasyBase {
    script?: CustomBiddingScriptRef;
}
/**
 * A single custom bidding script.
**/
export declare class CustomBiddingScript extends SpeakeasyBase {
    active?: boolean;
    createTime?: string;
    customBiddingAlgorithmId?: string;
    customBiddingScriptId?: string;
    errors?: ScriptError[];
    name?: string;
    script?: CustomBiddingScriptRef;
    state?: CustomBiddingScriptStateEnum;
}
