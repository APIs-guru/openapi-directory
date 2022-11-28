import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams;
    security: DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
