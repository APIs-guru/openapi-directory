import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityWithMember } from "./activitywithmember";
import { PostActivityWithMember } from "./postactivitywithmember";
import { Identity } from "./identity";



export class ActivityAndIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity?: any;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: Identity;
}
