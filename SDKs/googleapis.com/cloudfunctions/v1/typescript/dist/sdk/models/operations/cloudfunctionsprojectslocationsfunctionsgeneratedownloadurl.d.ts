import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlPathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlQueryParams;
    request?: shared.GenerateDownloadUrlRequest;
    security: CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse extends SpeakeasyBase {
    contentType: string;
    generateDownloadUrlResponse?: shared.GenerateDownloadUrlResponse;
    statusCode: number;
}
