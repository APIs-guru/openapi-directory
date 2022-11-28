import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsViewsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsViewsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsViewsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsViewsCreateRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsViewsCreatePathParams;
    queryParams: ContactcenterinsightsProjectsLocationsViewsCreateQueryParams;
    request?: shared.GoogleCloudContactcenterinsightsV1ViewInput;
    security: ContactcenterinsightsProjectsLocationsViewsCreateSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsViewsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1View?: shared.GoogleCloudContactcenterinsightsV1View;
    statusCode: number;
}
