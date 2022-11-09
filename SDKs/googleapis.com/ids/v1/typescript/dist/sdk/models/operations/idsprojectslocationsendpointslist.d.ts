import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsEndpointsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdsProjectsLocationsEndpointsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdsProjectsLocationsEndpointsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsEndpointsListRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsEndpointsListPathParams;
    queryParams: IdsProjectsLocationsEndpointsListQueryParams;
    security: IdsProjectsLocationsEndpointsListSecurity;
}
export declare class IdsProjectsLocationsEndpointsListResponse extends SpeakeasyBase {
    contentType: string;
    listEndpointsResponse?: shared.ListEndpointsResponse;
    statusCode: number;
}
