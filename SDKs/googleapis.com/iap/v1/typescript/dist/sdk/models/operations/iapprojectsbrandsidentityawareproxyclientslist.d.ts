import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IapProjectsBrandsIdentityAwareProxyClientsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsListQueryParams extends SpeakeasyBase {
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
export declare class IapProjectsBrandsIdentityAwareProxyClientsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsListRequest extends SpeakeasyBase {
    pathParams: IapProjectsBrandsIdentityAwareProxyClientsListPathParams;
    queryParams: IapProjectsBrandsIdentityAwareProxyClientsListQueryParams;
    security: IapProjectsBrandsIdentityAwareProxyClientsListSecurity;
}
export declare class IapProjectsBrandsIdentityAwareProxyClientsListResponse extends SpeakeasyBase {
    contentType: string;
    listIdentityAwareProxyClientsResponse?: shared.ListIdentityAwareProxyClientsResponse;
    statusCode: number;
}
