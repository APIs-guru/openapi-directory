import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorRequest extends SpeakeasyBase {
    pathParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorPathParams;
    queryParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorQueryParams;
    request?: shared.ComputeHeadCursorRequest;
    security: PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorSecurity;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse extends SpeakeasyBase {
    computeHeadCursorResponse?: shared.ComputeHeadCursorResponse;
    contentType: string;
    statusCode: number;
}
