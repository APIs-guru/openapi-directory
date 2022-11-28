import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsTopicsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsListQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteAdminProjectsLocationsTopicsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsTopicsListRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsTopicsListPathParams;
    queryParams: PubsubliteAdminProjectsLocationsTopicsListQueryParams;
    security: PubsubliteAdminProjectsLocationsTopicsListSecurity;
}
export declare class PubsubliteAdminProjectsLocationsTopicsListResponse extends SpeakeasyBase {
    contentType: string;
    listTopicsResponse?: shared.ListTopicsResponse;
    statusCode: number;
}
