import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsGatewaysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsGatewaysListQueryParams extends SpeakeasyBase {
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
export declare class NetworkservicesProjectsLocationsGatewaysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsGatewaysListRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsGatewaysListPathParams;
    queryParams: NetworkservicesProjectsLocationsGatewaysListQueryParams;
    security: NetworkservicesProjectsLocationsGatewaysListSecurity;
}
export declare class NetworkservicesProjectsLocationsGatewaysListResponse extends SpeakeasyBase {
    contentType: string;
    listGatewaysResponse?: shared.ListGatewaysResponse;
    statusCode: number;
}
