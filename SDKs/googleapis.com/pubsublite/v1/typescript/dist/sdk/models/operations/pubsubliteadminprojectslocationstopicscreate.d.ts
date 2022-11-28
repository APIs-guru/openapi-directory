import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsTopicsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    topicId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsTopicsCreateRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsTopicsCreatePathParams;
    queryParams: PubsubliteAdminProjectsLocationsTopicsCreateQueryParams;
    request?: shared.Topic;
    security: PubsubliteAdminProjectsLocationsTopicsCreateSecurity;
}
export declare class PubsubliteAdminProjectsLocationsTopicsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
