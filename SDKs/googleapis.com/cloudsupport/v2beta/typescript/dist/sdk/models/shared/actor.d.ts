import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing information about the effective user and authenticated principal responsible for an action.
**/
export declare class Actor extends SpeakeasyBase {
    displayName?: string;
    email?: string;
    googleSupport?: boolean;
}
/**
 * An object containing information about the effective user and authenticated principal responsible for an action.
**/
export declare class ActorInput extends SpeakeasyBase {
    displayName?: string;
    email?: string;
}
