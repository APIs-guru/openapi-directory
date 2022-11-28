import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChannelStatusLongUploadsStatusEnum {
    LongUploadsUnspecified = "longUploadsUnspecified",
    Allowed = "allowed",
    Eligible = "eligible",
    Disallowed = "disallowed"
}

export enum ChannelStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}


// ChannelStatus
/** 
 * JSON template for the status part of a channel.
**/
export class ChannelStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isLinked" })
  isLinked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=longUploadsStatus" })
  longUploadsStatus?: ChannelStatusLongUploadsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=madeForKids" })
  madeForKids?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privacyStatus" })
  privacyStatus?: ChannelStatusPrivacyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=selfDeclaredMadeForKids" })
  selfDeclaredMadeForKids?: boolean;
}
