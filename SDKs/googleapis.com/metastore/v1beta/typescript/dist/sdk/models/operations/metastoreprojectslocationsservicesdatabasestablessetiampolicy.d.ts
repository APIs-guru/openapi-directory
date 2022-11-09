import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyPathParams;
    queryParams: MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
