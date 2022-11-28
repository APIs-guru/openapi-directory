import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatafusionProjectsLocationsVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    latestPatchOnly?: boolean;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatafusionProjectsLocationsVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsVersionsListRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsVersionsListPathParams;
    queryParams: DatafusionProjectsLocationsVersionsListQueryParams;
    security: DatafusionProjectsLocationsVersionsListSecurity;
}
export declare class DatafusionProjectsLocationsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listAvailableVersionsResponse?: shared.ListAvailableVersionsResponse;
    statusCode: number;
}
