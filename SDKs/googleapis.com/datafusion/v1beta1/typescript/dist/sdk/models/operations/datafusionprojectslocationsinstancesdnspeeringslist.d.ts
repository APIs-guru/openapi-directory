import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsListQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsListRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesDnsPeeringsListPathParams;
    queryParams: DatafusionProjectsLocationsInstancesDnsPeeringsListQueryParams;
    security: DatafusionProjectsLocationsInstancesDnsPeeringsListSecurity;
}
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsListResponse extends SpeakeasyBase {
    contentType: string;
    listDnsPeeringsResponse?: shared.ListDnsPeeringsResponse;
    statusCode: number;
}
