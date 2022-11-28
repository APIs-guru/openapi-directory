import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceDetails } from "./spacedetails";
export declare enum SpaceSpaceThreadingStateEnum {
    SpaceThreadingStateUnspecified = "SPACE_THREADING_STATE_UNSPECIFIED",
    ThreadedMessages = "THREADED_MESSAGES",
    GroupedMessages = "GROUPED_MESSAGES",
    UnthreadedMessages = "UNTHREADED_MESSAGES"
}
export declare enum SpaceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Room = "ROOM",
    Dm = "DM"
}
/**
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
**/
export declare class Space extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    singleUserBotDm?: boolean;
    spaceDetails?: SpaceDetails;
    spaceThreadingState?: SpaceSpaceThreadingStateEnum;
    threaded?: boolean;
    type?: SpaceTypeEnum;
}
/**
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
**/
export declare class SpaceInput extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    singleUserBotDm?: boolean;
    spaceDetails?: SpaceDetails;
}
