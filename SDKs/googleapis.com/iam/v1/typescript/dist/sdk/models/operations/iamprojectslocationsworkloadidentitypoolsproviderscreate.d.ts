import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams extends SpeakeasyBase {
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
    workloadIdentityPoolProviderId?: string;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest extends SpeakeasyBase {
    pathParams: IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams;
    queryParams: IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams;
    request?: shared.WorkloadIdentityPoolProviderInput;
    security: IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
