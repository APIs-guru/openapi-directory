import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsTopicsGetPartitionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsGetPartitionsQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteAdminProjectsLocationsTopicsGetPartitionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsTopicsGetPartitionsRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsTopicsGetPartitionsPathParams;
    queryParams: PubsubliteAdminProjectsLocationsTopicsGetPartitionsQueryParams;
    security: PubsubliteAdminProjectsLocationsTopicsGetPartitionsSecurity;
}
export declare class PubsubliteAdminProjectsLocationsTopicsGetPartitionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topicPartitions?: shared.TopicPartitions;
}
