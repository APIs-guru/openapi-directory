import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClouderrorreportingProjectsEventsListPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare enum ClouderrorreportingProjectsEventsListTimeRangePeriodEnum {
    PeriodUnspecified = "PERIOD_UNSPECIFIED",
    Period1Hour = "PERIOD_1_HOUR",
    Period6Hours = "PERIOD_6_HOURS",
    Period1Day = "PERIOD_1_DAY",
    Period1Week = "PERIOD_1_WEEK",
    Period30Days = "PERIOD_30_DAYS"
}
export declare class ClouderrorreportingProjectsEventsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupId?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceFilterResourceType?: string;
    serviceFilterService?: string;
    serviceFilterVersion?: string;
    timeRangePeriod?: ClouderrorreportingProjectsEventsListTimeRangePeriodEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouderrorreportingProjectsEventsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouderrorreportingProjectsEventsListRequest extends SpeakeasyBase {
    pathParams: ClouderrorreportingProjectsEventsListPathParams;
    queryParams: ClouderrorreportingProjectsEventsListQueryParams;
    security: ClouderrorreportingProjectsEventsListSecurity;
}
export declare class ClouderrorreportingProjectsEventsListResponse extends SpeakeasyBase {
    contentType: string;
    listEventsResponse?: shared.ListEventsResponse;
    statusCode: number;
}
