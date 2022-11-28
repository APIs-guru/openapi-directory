import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsTopicsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsTopicsGetRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsTopicsGetPathParams;
    queryParams: PubsubliteAdminProjectsLocationsTopicsGetQueryParams;
    security: PubsubliteAdminProjectsLocationsTopicsGetSecurity;
}
export declare class PubsubliteAdminProjectsLocationsTopicsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
