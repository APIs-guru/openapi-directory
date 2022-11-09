import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClouderrorreportingProjectsGroupStatsListPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare enum ClouderrorreportingProjectsGroupStatsListAlignmentEnum {
    ErrorCountAlignmentUnspecified = "ERROR_COUNT_ALIGNMENT_UNSPECIFIED",
    AlignmentEqualRounded = "ALIGNMENT_EQUAL_ROUNDED",
    AlignmentEqualAtEnd = "ALIGNMENT_EQUAL_AT_END"
}
export declare enum ClouderrorreportingProjectsGroupStatsListOrderEnum {
    GroupOrderUnspecified = "GROUP_ORDER_UNSPECIFIED",
    CountDesc = "COUNT_DESC",
    LastSeenDesc = "LAST_SEEN_DESC",
    CreatedDesc = "CREATED_DESC",
    AffectedUsersDesc = "AFFECTED_USERS_DESC"
}
export declare enum ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum {
    PeriodUnspecified = "PERIOD_UNSPECIFIED",
    Period1Hour = "PERIOD_1_HOUR",
    Period6Hours = "PERIOD_6_HOURS",
    Period1Day = "PERIOD_1_DAY",
    Period1Week = "PERIOD_1_WEEK",
    Period30Days = "PERIOD_30_DAYS"
}
export declare class ClouderrorreportingProjectsGroupStatsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alignment?: ClouderrorreportingProjectsGroupStatsListAlignmentEnum;
    alignmentTime?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupId?: string[];
    key?: string;
    oauthToken?: string;
    order?: ClouderrorreportingProjectsGroupStatsListOrderEnum;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceFilterResourceType?: string;
    serviceFilterService?: string;
    serviceFilterVersion?: string;
    timeRangePeriod?: ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum;
    timedCountDuration?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouderrorreportingProjectsGroupStatsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouderrorreportingProjectsGroupStatsListRequest extends SpeakeasyBase {
    pathParams: ClouderrorreportingProjectsGroupStatsListPathParams;
    queryParams: ClouderrorreportingProjectsGroupStatsListQueryParams;
    security: ClouderrorreportingProjectsGroupStatsListSecurity;
}
export declare class ClouderrorreportingProjectsGroupStatsListResponse extends SpeakeasyBase {
    contentType: string;
    listGroupStatsResponse?: shared.ListGroupStatsResponse;
    statusCode: number;
}
