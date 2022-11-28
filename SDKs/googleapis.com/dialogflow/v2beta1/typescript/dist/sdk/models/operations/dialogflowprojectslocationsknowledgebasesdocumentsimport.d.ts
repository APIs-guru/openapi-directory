import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportPathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1ImportDocumentsRequest;
    security: DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
