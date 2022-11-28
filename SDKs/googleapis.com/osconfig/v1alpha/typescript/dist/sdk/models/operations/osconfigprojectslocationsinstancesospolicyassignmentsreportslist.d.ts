import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListPathParams;
    queryParams: OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListQueryParams;
    security: OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity;
}
export declare class OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse extends SpeakeasyBase {
    contentType: string;
    listOsPolicyAssignmentReportsResponse?: shared.ListOsPolicyAssignmentReportsResponse;
    statusCode: number;
}
