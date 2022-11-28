import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams;
    queryParams: DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams;
    security: DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity;
}
export declare class DialogflowProjectsLocationsConversationModelsEvaluationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListConversationModelEvaluationsResponse?: shared.GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;
    statusCode: number;
}
