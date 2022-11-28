import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams;
    request?: shared.GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest;
    security: ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
