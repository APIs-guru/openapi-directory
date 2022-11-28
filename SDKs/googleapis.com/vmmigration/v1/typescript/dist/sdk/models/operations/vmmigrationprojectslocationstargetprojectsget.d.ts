import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsTargetProjectsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum VmmigrationProjectsLocationsTargetProjectsGetViewEnum {
    UtilizationReportViewUnspecified = "UTILIZATION_REPORT_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class VmmigrationProjectsLocationsTargetProjectsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: VmmigrationProjectsLocationsTargetProjectsGetViewEnum;
}
export declare class VmmigrationProjectsLocationsTargetProjectsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsTargetProjectsGetRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsTargetProjectsGetPathParams;
    queryParams: VmmigrationProjectsLocationsTargetProjectsGetQueryParams;
    security: VmmigrationProjectsLocationsTargetProjectsGetSecurity;
}
export declare class VmmigrationProjectsLocationsTargetProjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetProject?: shared.TargetProject;
}
