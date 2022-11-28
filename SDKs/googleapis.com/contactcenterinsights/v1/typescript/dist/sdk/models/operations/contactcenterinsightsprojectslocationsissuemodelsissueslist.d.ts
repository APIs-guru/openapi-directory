import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsIssueModelsIssuesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsIssuesListQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsIssueModelsIssuesListPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsIssueModelsIssuesListQueryParams;
    security: ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1ListIssuesResponse?: shared.GoogleCloudContactcenterinsightsV1ListIssuesResponse;
    statusCode: number;
}
