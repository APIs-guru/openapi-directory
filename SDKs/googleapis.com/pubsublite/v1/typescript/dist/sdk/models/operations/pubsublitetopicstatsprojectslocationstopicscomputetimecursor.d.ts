import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest extends SpeakeasyBase {
    pathParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams;
    queryParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams;
    request?: shared.ComputeTimeCursorRequest;
    security: PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse extends SpeakeasyBase {
    computeTimeCursorResponse?: shared.ComputeTimeCursorResponse;
    contentType: string;
    statusCode: number;
}
