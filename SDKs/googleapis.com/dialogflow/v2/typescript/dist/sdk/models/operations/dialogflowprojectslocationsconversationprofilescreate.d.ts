import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationProfilesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationProfilesCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationProfilesCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationProfilesCreatePathParams;
    queryParams: DialogflowProjectsLocationsConversationProfilesCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2ConversationProfileInput;
    security: DialogflowProjectsLocationsConversationProfilesCreateSecurity;
}
export declare class DialogflowProjectsLocationsConversationProfilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ConversationProfile?: shared.GoogleCloudDialogflowV2ConversationProfile;
    statusCode: number;
}
