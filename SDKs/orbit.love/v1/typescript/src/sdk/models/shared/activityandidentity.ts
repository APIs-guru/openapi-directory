import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityWithMember } from "./activitywithmember";
import { PostActivityWithMember } from "./postactivitywithmember";
import { Identity } from "./identity";


export class ActivityAndIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity?: any;

  @Metadata({ data: "json, name=identity" })
  identity?: Identity;
}
