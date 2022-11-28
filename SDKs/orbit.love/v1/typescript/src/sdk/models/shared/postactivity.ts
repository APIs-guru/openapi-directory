import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostActivityActivityTypeEnum {
    Content = "content"
}


export class PostActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity_type" })
  activityType: PostActivityActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
