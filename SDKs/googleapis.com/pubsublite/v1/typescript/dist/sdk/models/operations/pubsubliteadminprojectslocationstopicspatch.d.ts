import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsTopicsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsTopicsPatchRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsTopicsPatchPathParams;
    queryParams: PubsubliteAdminProjectsLocationsTopicsPatchQueryParams;
    request?: shared.Topic;
    security: PubsubliteAdminProjectsLocationsTopicsPatchSecurity;
}
export declare class PubsubliteAdminProjectsLocationsTopicsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
