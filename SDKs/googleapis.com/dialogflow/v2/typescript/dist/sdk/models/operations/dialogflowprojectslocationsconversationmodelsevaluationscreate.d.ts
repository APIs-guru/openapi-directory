import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams;
    queryParams: DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput;
    security: DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
