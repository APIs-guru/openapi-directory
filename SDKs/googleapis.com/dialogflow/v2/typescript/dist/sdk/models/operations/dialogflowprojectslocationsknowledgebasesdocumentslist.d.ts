import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsListPathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesDocumentsListQueryParams;
    security: DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListDocumentsResponse?: shared.GoogleCloudDialogflowV2ListDocumentsResponse;
    statusCode: number;
}
