import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Member } from "./member";

export enum PostActivityWithMemberActivityTypeEnum {
    Content = "content"
}


export class PostActivityWithMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity_type" })
  activityType: PostActivityWithMemberActivityTypeEnum;

  @Metadata({ data: "json, name=member" })
  member?: Member;

  @Metadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
