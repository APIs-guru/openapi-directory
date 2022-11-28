import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsExportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsExportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsExportPathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsExportQueryParams;
    request?: shared.GoogleCloudDialogflowV2ExportDocumentRequest;
    security: DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsExportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
