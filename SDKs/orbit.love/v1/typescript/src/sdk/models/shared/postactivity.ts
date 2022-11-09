import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostActivityActivityTypeEnum {
    Content = "content"
}


export class PostActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity_type" })
  activityType: PostActivityActivityTypeEnum;

  @Metadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
