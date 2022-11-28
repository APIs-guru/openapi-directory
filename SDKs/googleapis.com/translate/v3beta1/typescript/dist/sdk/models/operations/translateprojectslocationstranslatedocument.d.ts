import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsTranslateDocumentPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsTranslateDocumentQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsTranslateDocumentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsTranslateDocumentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsTranslateDocumentSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsTranslateDocumentSecurityOption1;
    option2?: TranslateProjectsLocationsTranslateDocumentSecurityOption2;
}
export declare class TranslateProjectsLocationsTranslateDocumentRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsTranslateDocumentPathParams;
    queryParams: TranslateProjectsLocationsTranslateDocumentQueryParams;
    request?: shared.TranslateDocumentRequest;
    security: TranslateProjectsLocationsTranslateDocumentSecurity;
}
export declare class TranslateProjectsLocationsTranslateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translateDocumentResponse?: shared.TranslateDocumentResponse;
}
