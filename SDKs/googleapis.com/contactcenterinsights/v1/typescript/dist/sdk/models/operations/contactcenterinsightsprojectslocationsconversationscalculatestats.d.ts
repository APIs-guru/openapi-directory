import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams extends SpeakeasyBase {
    location: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams;
    security: ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1CalculateStatsResponse?: shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse;
    statusCode: number;
}
