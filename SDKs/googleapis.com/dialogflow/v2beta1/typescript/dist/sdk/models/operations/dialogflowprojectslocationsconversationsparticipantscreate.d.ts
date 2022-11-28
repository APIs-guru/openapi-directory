import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsParticipantsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsParticipantsCreatePathParams;
    queryParams: DialogflowProjectsLocationsConversationsParticipantsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1Participant;
    security: DialogflowProjectsLocationsConversationsParticipantsCreateSecurity;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1Participant?: shared.GoogleCloudDialogflowV2beta1Participant;
    statusCode: number;
}
