import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsLocationsWorkloadIdentityPoolsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsListQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsLocationsWorkloadIdentityPoolsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsListRequest extends SpeakeasyBase {
    pathParams: IamProjectsLocationsWorkloadIdentityPoolsListPathParams;
    queryParams: IamProjectsLocationsWorkloadIdentityPoolsListQueryParams;
    security: IamProjectsLocationsWorkloadIdentityPoolsListSecurity;
}
export declare class IamProjectsLocationsWorkloadIdentityPoolsListResponse extends SpeakeasyBase {
    contentType: string;
    listWorkloadIdentityPoolsResponse?: shared.ListWorkloadIdentityPoolsResponse;
    statusCode: number;
}
