import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProvidersNotesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProvidersNotesGetQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProvidersNotesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProvidersNotesGetRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProvidersNotesGetPathParams;
    queryParams: ContaineranalysisProvidersNotesGetQueryParams;
    security: ContaineranalysisProvidersNotesGetSecurity;
}
export declare class ContaineranalysisProvidersNotesGetResponse extends SpeakeasyBase {
    contentType: string;
    note?: shared.Note;
    statusCode: number;
}
