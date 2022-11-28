import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams extends SpeakeasyBase {
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
}
export declare class DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
