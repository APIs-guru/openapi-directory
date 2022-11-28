import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsConversationsAnalysesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsAnalysesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsConversationsAnalysesListPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsConversationsAnalysesListQueryParams;
    security: ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1ListAnalysesResponse?: shared.GoogleCloudContactcenterinsightsV1ListAnalysesResponse;
    statusCode: number;
}
