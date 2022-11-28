import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsDeletePathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteQueryParams;
    security: DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
