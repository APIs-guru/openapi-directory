import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SpaceDetails } from "./spacedetails";

export enum SpaceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Room = "ROOM"
,    Dm = "DM"
}


// Space
/** 
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
**/
export class Space extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=singleUserBotDm" })
  singleUserBotDm?: boolean;

  @Metadata({ data: "json, name=spaceDetails" })
  spaceDetails?: SpaceDetails;

  @Metadata({ data: "json, name=threaded" })
  threaded?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: SpaceTypeEnum;
}
