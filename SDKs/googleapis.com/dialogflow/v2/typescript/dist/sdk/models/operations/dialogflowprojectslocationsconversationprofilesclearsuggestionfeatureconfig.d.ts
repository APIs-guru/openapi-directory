import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams extends SpeakeasyBase {
    conversationProfile: string;
}
export declare class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams;
    queryParams: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams;
    request?: shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest;
    security: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity;
}
export declare class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
