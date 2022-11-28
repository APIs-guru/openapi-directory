import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsViewsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ContactcenterinsightsProjectsLocationsViewsGetViewEnum {
    ConversationViewUnspecified = "CONVERSATION_VIEW_UNSPECIFIED",
    Full = "FULL",
    Basic = "BASIC"
}
export declare class ContactcenterinsightsProjectsLocationsViewsGetQueryParams extends SpeakeasyBase {
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
    view?: ContactcenterinsightsProjectsLocationsViewsGetViewEnum;
}
export declare class ContactcenterinsightsProjectsLocationsViewsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsViewsGetRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsViewsGetPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsViewsGetQueryParams;
    security: ContactcenterinsightsProjectsLocationsViewsGetSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsViewsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1View?: shared.GoogleCloudContactcenterinsightsV1View;
    statusCode: number;
}
