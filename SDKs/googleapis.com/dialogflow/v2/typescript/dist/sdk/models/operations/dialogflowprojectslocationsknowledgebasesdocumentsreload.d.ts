import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams;
    request?: shared.GoogleCloudDialogflowV2ReloadDocumentRequest;
    security: DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
