import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";


export enum PostActivityWithMemberActivityTypeEnum {
    Content = "content"
}


export class PostActivityWithMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity_type" })
  activityType: PostActivityWithMemberActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: Member;

  @SpeakeasyMetadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
