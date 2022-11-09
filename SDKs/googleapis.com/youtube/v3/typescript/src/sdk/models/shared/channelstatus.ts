import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChannelStatusLongUploadsStatusEnum {
    LongUploadsUnspecified = "longUploadsUnspecified"
,    Allowed = "allowed"
,    Eligible = "eligible"
,    Disallowed = "disallowed"
}

export enum ChannelStatusPrivacyStatusEnum {
    Public = "public"
,    Unlisted = "unlisted"
,    Private = "private"
}


// ChannelStatus
/** 
 * JSON template for the status part of a channel.
**/
export class ChannelStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=isLinked" })
  isLinked?: boolean;

  @Metadata({ data: "json, name=longUploadsStatus" })
  longUploadsStatus?: ChannelStatusLongUploadsStatusEnum;

  @Metadata({ data: "json, name=madeForKids" })
  madeForKids?: boolean;

  @Metadata({ data: "json, name=privacyStatus" })
  privacyStatus?: ChannelStatusPrivacyStatusEnum;

  @Metadata({ data: "json, name=selfDeclaredMadeForKids" })
  selfDeclaredMadeForKids?: boolean;
}
