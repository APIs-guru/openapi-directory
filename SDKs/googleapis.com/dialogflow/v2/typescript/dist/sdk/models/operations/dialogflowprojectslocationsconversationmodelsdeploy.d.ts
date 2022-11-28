import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationModelsDeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsConversationModelsDeployQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationModelsDeploySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsDeploySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsDeploySecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationModelsDeploySecurityOption1;
    option2?: DialogflowProjectsLocationsConversationModelsDeploySecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationModelsDeployRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationModelsDeployPathParams;
    queryParams: DialogflowProjectsLocationsConversationModelsDeployQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsConversationModelsDeploySecurity;
}
export declare class DialogflowProjectsLocationsConversationModelsDeployResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
