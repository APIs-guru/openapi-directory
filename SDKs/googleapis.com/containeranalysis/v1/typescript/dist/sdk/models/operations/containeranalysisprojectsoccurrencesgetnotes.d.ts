import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesGetNotesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProjectsOccurrencesGetNotesQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProjectsOccurrencesGetNotesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesGetNotesRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesGetNotesPathParams;
    queryParams: ContaineranalysisProjectsOccurrencesGetNotesQueryParams;
    security: ContaineranalysisProjectsOccurrencesGetNotesSecurity;
}
export declare class ContaineranalysisProjectsOccurrencesGetNotesResponse extends SpeakeasyBase {
    contentType: string;
    note?: shared.Note;
    statusCode: number;
}
