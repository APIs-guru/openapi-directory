import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsBatchTranslateTextPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsBatchTranslateTextQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsBatchTranslateTextSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsBatchTranslateTextRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsBatchTranslateTextPathParams;
    queryParams: TranslateProjectsLocationsBatchTranslateTextQueryParams;
    request?: shared.BatchTranslateTextRequest;
    security: TranslateProjectsLocationsBatchTranslateTextSecurity;
}
export declare class TranslateProjectsLocationsBatchTranslateTextResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
