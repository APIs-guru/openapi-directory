import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostActivityActivityTypeEnum {
    Content = "content"
}
export declare class PostActivity extends SpeakeasyBase {
    activityType: PostActivityActivityTypeEnum;
    occurredAt?: string;
    url: string;
}
