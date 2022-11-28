import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsNotesBatchCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContaineranalysisProjectsNotesBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProjectsNotesBatchCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsNotesBatchCreateRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsNotesBatchCreatePathParams;
    queryParams: ContaineranalysisProjectsNotesBatchCreateQueryParams;
    request?: shared.BatchCreateNotesRequest;
    security: ContaineranalysisProjectsNotesBatchCreateSecurity;
}
export declare class ContaineranalysisProjectsNotesBatchCreateResponse extends SpeakeasyBase {
    batchCreateNotesResponse?: shared.BatchCreateNotesResponse;
    contentType: string;
    statusCode: number;
}
