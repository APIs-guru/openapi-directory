import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsNotesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContaineranalysisProjectsNotesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    noteId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProjectsNotesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsNotesCreateRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsNotesCreatePathParams;
    queryParams: ContaineranalysisProjectsNotesCreateQueryParams;
    request?: shared.Note;
    security: ContaineranalysisProjectsNotesCreateSecurity;
}
export declare class ContaineranalysisProjectsNotesCreateResponse extends SpeakeasyBase {
    contentType: string;
    note?: shared.Note;
    statusCode: number;
}
