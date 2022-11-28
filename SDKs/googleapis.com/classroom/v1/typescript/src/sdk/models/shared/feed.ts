import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CourseRosterChangesInfo } from "./courserosterchangesinfo";
import { CourseWorkChangesInfo } from "./courseworkchangesinfo";


export enum FeedFeedTypeEnum {
    FeedTypeUnspecified = "FEED_TYPE_UNSPECIFIED",
    DomainRosterChanges = "DOMAIN_ROSTER_CHANGES",
    CourseRosterChanges = "COURSE_ROSTER_CHANGES",
    CourseWorkChanges = "COURSE_WORK_CHANGES"
}


// Feed
/** 
 * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
**/
export class Feed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseRosterChangesInfo" })
  courseRosterChangesInfo?: CourseRosterChangesInfo;

  @SpeakeasyMetadata({ data: "json, name=courseWorkChangesInfo" })
  courseWorkChangesInfo?: CourseWorkChangesInfo;

  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: FeedFeedTypeEnum;
}
