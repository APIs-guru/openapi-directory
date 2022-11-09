import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersListQueryParams extends SpeakeasyBase {
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
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersListRequest extends SpeakeasyBase {
    pathParams: IamProjectsLocationsWorkloadIdentityPoolsProvidersListPathParams;
    queryParams: IamProjectsLocationsWorkloadIdentityPoolsProvidersListQueryParams;
    security: IamProjectsLocationsWorkloadIdentityPoolsProvidersListSecurity;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsProvidersListResponse extends SpeakeasyBase {
    contentType: string;
    listWorkloadIdentityPoolProvidersResponse?: shared.ListWorkloadIdentityPoolProvidersResponse;
    statusCode: number;
}
