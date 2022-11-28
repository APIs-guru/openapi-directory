import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsIssueModelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsListQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsIssueModelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsListRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsIssueModelsListPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsIssueModelsListQueryParams;
    security: ContactcenterinsightsProjectsLocationsIssueModelsListSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1ListIssueModelsResponse?: shared.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse;
    statusCode: number;
}
