import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpaceDetails } from "./spacedetails";


export enum SpaceSpaceThreadingStateEnum {
    SpaceThreadingStateUnspecified = "SPACE_THREADING_STATE_UNSPECIFIED",
    ThreadedMessages = "THREADED_MESSAGES",
    GroupedMessages = "GROUPED_MESSAGES",
    UnthreadedMessages = "UNTHREADED_MESSAGES"
}

export enum SpaceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Room = "ROOM",
    Dm = "DM"
}


// Space
/** 
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
**/
export class Space extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=singleUserBotDm" })
  singleUserBotDm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spaceDetails" })
  spaceDetails?: SpaceDetails;

  @SpeakeasyMetadata({ data: "json, name=spaceThreadingState" })
  spaceThreadingState?: SpaceSpaceThreadingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=threaded" })
  threaded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SpaceTypeEnum;
}


// SpaceInput
/** 
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
**/
export class SpaceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=singleUserBotDm" })
  singleUserBotDm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spaceDetails" })
  spaceDetails?: SpaceDetails;
}
