import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProvidersNotesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProvidersNotesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProvidersNotesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProvidersNotesPatchRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProvidersNotesPatchPathParams;
    queryParams: ContaineranalysisProvidersNotesPatchQueryParams;
    request?: shared.Note;
    security: ContaineranalysisProvidersNotesPatchSecurity;
}
export declare class ContaineranalysisProvidersNotesPatchResponse extends SpeakeasyBase {
    contentType: string;
    note?: shared.Note;
    statusCode: number;
}
