import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsListQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsListRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsListPathParams;
    queryParams: IamProjectsServiceAccountsListQueryParams;
    security: IamProjectsServiceAccountsListSecurity;
}
export declare class IamProjectsServiceAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    listServiceAccountsResponse?: shared.ListServiceAccountsResponse;
    statusCode: number;
}
