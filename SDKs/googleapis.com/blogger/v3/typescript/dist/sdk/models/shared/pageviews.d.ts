import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PageviewsCountsTimeRangeEnum {
    AllTime = "ALL_TIME",
    ThirtyDays = "THIRTY_DAYS",
    SevenDays = "SEVEN_DAYS"
}
export declare class PageviewsCounts extends SpeakeasyBase {
    count?: string;
    timeRange?: PageviewsCountsTimeRangeEnum;
}
export declare class Pageviews extends SpeakeasyBase {
    blogId?: string;
    counts?: PageviewsCounts[];
    kind?: string;
}
