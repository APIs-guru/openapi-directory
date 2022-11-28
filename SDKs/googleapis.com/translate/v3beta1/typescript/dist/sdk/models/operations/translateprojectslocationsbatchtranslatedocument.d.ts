import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsBatchTranslateDocumentPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsBatchTranslateDocumentQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsBatchTranslateDocumentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsBatchTranslateDocumentRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsBatchTranslateDocumentPathParams;
    queryParams: TranslateProjectsLocationsBatchTranslateDocumentQueryParams;
    request?: shared.BatchTranslateDocumentRequest;
    security: TranslateProjectsLocationsBatchTranslateDocumentSecurity;
}
export declare class TranslateProjectsLocationsBatchTranslateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
