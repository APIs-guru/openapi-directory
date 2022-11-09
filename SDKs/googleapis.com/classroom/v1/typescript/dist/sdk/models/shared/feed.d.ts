import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CourseRosterChangesInfo } from "./courserosterchangesinfo";
import { CourseWorkChangesInfo } from "./courseworkchangesinfo";
export declare enum FeedFeedTypeEnum {
    FeedTypeUnspecified = "FEED_TYPE_UNSPECIFIED",
    DomainRosterChanges = "DOMAIN_ROSTER_CHANGES",
    CourseRosterChanges = "COURSE_ROSTER_CHANGES",
    CourseWorkChanges = "COURSE_WORK_CHANGES"
}
/**
 * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
**/
export declare class Feed extends SpeakeasyBase {
    courseRosterChangesInfo?: CourseRosterChangesInfo;
    courseWorkChangesInfo?: CourseWorkChangesInfo;
    feedType?: FeedFeedTypeEnum;
}
