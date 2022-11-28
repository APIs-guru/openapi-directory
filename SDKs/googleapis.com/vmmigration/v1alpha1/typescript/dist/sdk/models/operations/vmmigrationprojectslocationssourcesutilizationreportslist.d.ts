import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum {
    UtilizationReportViewUnspecified = "UTILIZATION_REPORT_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams;
    security: VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse extends SpeakeasyBase {
    contentType: string;
    listUtilizationReportsResponse?: shared.ListUtilizationReportsResponse;
    statusCode: number;
}
