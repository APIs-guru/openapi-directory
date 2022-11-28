import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams extends SpeakeasyBase {
    conversationProfile: string;
}
export declare class DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams;
    queryParams: DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams;
    request?: shared.GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest;
    security: DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity;
}
export declare class DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
