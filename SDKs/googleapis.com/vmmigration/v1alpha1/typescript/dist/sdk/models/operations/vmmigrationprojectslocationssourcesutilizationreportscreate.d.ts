import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    utilizationReportId?: string;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams;
    queryParams: VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams;
    request?: shared.UtilizationReportInput;
    security: VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
