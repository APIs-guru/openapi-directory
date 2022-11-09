import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IapProjectsIapTunnelLocationsDestGroupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsListQueryParams extends SpeakeasyBase {
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
export declare class IapProjectsIapTunnelLocationsDestGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsListRequest extends SpeakeasyBase {
    pathParams: IapProjectsIapTunnelLocationsDestGroupsListPathParams;
    queryParams: IapProjectsIapTunnelLocationsDestGroupsListQueryParams;
    security: IapProjectsIapTunnelLocationsDestGroupsListSecurity;
}
export declare class IapProjectsIapTunnelLocationsDestGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    listTunnelDestGroupsResponse?: shared.ListTunnelDestGroupsResponse;
    statusCode: number;
}
