import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProvidersNotesCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProvidersNotesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    noteId?: string;
    oauthToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProvidersNotesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProvidersNotesCreateRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProvidersNotesCreatePathParams;
    queryParams: ContaineranalysisProvidersNotesCreateQueryParams;
    request?: shared.Note;
    security: ContaineranalysisProvidersNotesCreateSecurity;
}
export declare class ContaineranalysisProvidersNotesCreateResponse extends SpeakeasyBase {
    contentType: string;
    note?: shared.Note;
    statusCode: number;
}
