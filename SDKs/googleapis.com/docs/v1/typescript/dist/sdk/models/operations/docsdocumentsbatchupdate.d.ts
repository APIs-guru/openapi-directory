import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocsDocumentsBatchUpdatePathParams extends SpeakeasyBase {
    documentId: string;
}
export declare class DocsDocumentsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class DocsDocumentsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsBatchUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocsDocumentsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: DocsDocumentsBatchUpdateSecurityOption1;
    option2?: DocsDocumentsBatchUpdateSecurityOption2;
    option3?: DocsDocumentsBatchUpdateSecurityOption3;
}
export declare class DocsDocumentsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: DocsDocumentsBatchUpdatePathParams;
    queryParams: DocsDocumentsBatchUpdateQueryParams;
    request?: shared.BatchUpdateDocumentRequest;
    security: DocsDocumentsBatchUpdateSecurity;
}
export declare class DocsDocumentsBatchUpdateResponse extends SpeakeasyBase {
    batchUpdateDocumentResponse?: shared.BatchUpdateDocumentResponse;
    contentType: string;
    statusCode: number;
}
