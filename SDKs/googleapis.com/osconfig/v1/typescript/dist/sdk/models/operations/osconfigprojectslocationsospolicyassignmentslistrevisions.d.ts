import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsPathParams;
    queryParams: OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsQueryParams;
    security: OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    listOsPolicyAssignmentRevisionsResponse?: shared.ListOsPolicyAssignmentRevisionsResponse;
    statusCode: number;
}
