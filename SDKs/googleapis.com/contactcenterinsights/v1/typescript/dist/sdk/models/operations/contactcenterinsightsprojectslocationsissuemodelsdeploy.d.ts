import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams;
    request?: shared.GoogleCloudContactcenterinsightsV1DeployIssueModelRequest;
    security: ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity;
}
export declare class ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
