import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationModelsUndeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsConversationModelsUndeployQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsUndeploySecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1;
    option2?: DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationModelsUndeployRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationModelsUndeployPathParams;
    queryParams: DialogflowProjectsLocationsConversationModelsUndeployQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsConversationModelsUndeploySecurity;
}
export declare class DialogflowProjectsLocationsConversationModelsUndeployResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
