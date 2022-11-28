import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsKnowledgeBasesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1;
    option2?: DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsKnowledgeBasesListPathParams;
    queryParams: DialogflowProjectsLocationsKnowledgeBasesListQueryParams;
    security: DialogflowProjectsLocationsKnowledgeBasesListSecurity;
}
export declare class DialogflowProjectsLocationsKnowledgeBasesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListKnowledgeBasesResponse?: shared.GoogleCloudDialogflowV2ListKnowledgeBasesResponse;
    statusCode: number;
}
