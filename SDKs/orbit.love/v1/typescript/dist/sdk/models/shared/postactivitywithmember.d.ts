import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Member } from "./member";
export declare enum PostActivityWithMemberActivityTypeEnum {
    Content = "content"
}
export declare class PostActivityWithMember extends SpeakeasyBase {
    activityType: PostActivityWithMemberActivityTypeEnum;
    member?: Member;
    occurredAt?: string;
    url: string;
}
