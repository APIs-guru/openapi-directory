import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1DocumentInput;
    security: DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
