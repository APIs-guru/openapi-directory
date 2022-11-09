import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams;
    request?: shared.GenerateUploadUrlRequest;
    security: CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse extends SpeakeasyBase {
    contentType: string;
    generateUploadUrlResponse?: shared.GenerateUploadUrlResponse;
    statusCode: number;
}
