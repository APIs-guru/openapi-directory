import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocsDocumentsGetPathParams extends SpeakeasyBase {
    documentId: string;
}
export declare enum DocsDocumentsGetSuggestionsViewModeEnum {
    DefaultForCurrentAccess = "DEFAULT_FOR_CURRENT_ACCESS",
    SuggestionsInline = "SUGGESTIONS_INLINE",
    PreviewSuggestionsAccepted = "PREVIEW_SUGGESTIONS_ACCEPTED",
    PreviewWithoutSuggestions = "PREVIEW_WITHOUT_SUGGESTIONS"
}
export declare class DocsDocumentsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    suggestionsViewMode?: DocsDocumentsGetSuggestionsViewModeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DocsDocumentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsGetSecurity extends SpeakeasyBase {
    option1?: DocsDocumentsGetSecurityOption1;
    option2?: DocsDocumentsGetSecurityOption2;
    option3?: DocsDocumentsGetSecurityOption3;
    option4?: DocsDocumentsGetSecurityOption4;
    option5?: DocsDocumentsGetSecurityOption5;
}
export declare class DocsDocumentsGetRequest extends SpeakeasyBase {
    pathParams: DocsDocumentsGetPathParams;
    queryParams: DocsDocumentsGetQueryParams;
    security: DocsDocumentsGetSecurity;
}
export declare class DocsDocumentsGetResponse extends SpeakeasyBase {
    contentType: string;
    document?: shared.Document;
    statusCode: number;
}
