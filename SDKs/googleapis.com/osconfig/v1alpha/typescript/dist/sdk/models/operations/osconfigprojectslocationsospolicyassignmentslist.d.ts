import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsOsPolicyAssignmentsListPathParams;
    queryParams: OsconfigProjectsLocationsOsPolicyAssignmentsListQueryParams;
    security: OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listOsPolicyAssignmentsResponse?: shared.ListOsPolicyAssignmentsResponse;
    statusCode: number;
}
