import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsPathParams extends SpeakeasyBase {
    issueModel: string;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsQueryParams;
    security: ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse?: shared.GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse;
    statusCode: number;
}
