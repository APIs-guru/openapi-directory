import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsLocationsWorkloadIdentityPoolsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsCreateQueryParams extends SpeakeasyBase {
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
    workloadIdentityPoolId?: string;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsCreateRequest extends SpeakeasyBase {
    pathParams: IamProjectsLocationsWorkloadIdentityPoolsCreatePathParams;
    queryParams: IamProjectsLocationsWorkloadIdentityPoolsCreateQueryParams;
    request?: shared.WorkloadIdentityPoolInput;
    security: IamProjectsLocationsWorkloadIdentityPoolsCreateSecurity;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
