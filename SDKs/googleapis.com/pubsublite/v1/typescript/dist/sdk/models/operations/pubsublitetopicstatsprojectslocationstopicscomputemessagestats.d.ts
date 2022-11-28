import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest extends SpeakeasyBase {
    pathParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsPathParams;
    queryParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsQueryParams;
    request?: shared.ComputeMessageStatsRequest;
    security: PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsSecurity;
}
export declare class PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse extends SpeakeasyBase {
    computeMessageStatsResponse?: shared.ComputeMessageStatsResponse;
    contentType: string;
    statusCode: number;
}
