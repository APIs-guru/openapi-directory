import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyPathParams;
    queryParams: MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyQueryParams;
    security: MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
