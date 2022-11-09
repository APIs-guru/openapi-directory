import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
import { MembershipsDetails } from "./membershipsdetails";


export class MemberSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorChannelId" })
  creatorChannelId?: string;

  @Metadata({ data: "json, name=memberDetails" })
  memberDetails?: ChannelProfileDetails;

  @Metadata({ data: "json, name=membershipsDetails" })
  membershipsDetails?: MembershipsDetails;
}
