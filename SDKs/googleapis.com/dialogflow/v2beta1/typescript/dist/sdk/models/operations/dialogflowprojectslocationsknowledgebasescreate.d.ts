import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesCreatePathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1KnowledgeBase;
    security: DialogflowProjectsLocationsKnowledgeBasesCreateSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1KnowledgeBase?: shared.GoogleCloudDialogflowV2beta1KnowledgeBase;
    statusCode: number;
}
