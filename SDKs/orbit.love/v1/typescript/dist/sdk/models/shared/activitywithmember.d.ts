import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
export declare class ActivityWithMember extends SpeakeasyBase {
    activityType?: string;
    description?: string;
    key?: string;
    link?: string;
    linkText?: string;
    member?: Member;
    occurredAt?: string;
    tags?: string[];
    title: string;
    weight?: string;
}
