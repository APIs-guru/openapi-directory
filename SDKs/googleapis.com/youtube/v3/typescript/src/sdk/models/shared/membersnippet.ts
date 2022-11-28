import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
import { MembershipsDetails } from "./membershipsdetails";



export class MemberSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorChannelId" })
  creatorChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=memberDetails" })
  memberDetails?: ChannelProfileDetails;

  @SpeakeasyMetadata({ data: "json, name=membershipsDetails" })
  membershipsDetails?: MembershipsDetails;
}
