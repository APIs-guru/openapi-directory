import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProvidersNotesOccurrencesListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProvidersNotesOccurrencesListQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProvidersNotesOccurrencesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProvidersNotesOccurrencesListRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProvidersNotesOccurrencesListPathParams;
    queryParams: ContaineranalysisProvidersNotesOccurrencesListQueryParams;
    security: ContaineranalysisProvidersNotesOccurrencesListSecurity;
}
export declare class ContaineranalysisProvidersNotesOccurrencesListResponse extends SpeakeasyBase {
    contentType: string;
    listNoteOccurrencesResponse?: shared.ListNoteOccurrencesResponse;
    statusCode: number;
}
