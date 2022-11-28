import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyMediaUploadPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyMediaUploadQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyMediaUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyMediaUploadRequest extends SpeakeasyBase {
    pathParams: ChromepolicyMediaUploadPathParams;
    queryParams: ChromepolicyMediaUploadQueryParams;
    request?: Uint8Array;
    security: ChromepolicyMediaUploadSecurity;
}
export declare class ChromepolicyMediaUploadResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1UploadPolicyFileResponse?: shared.GoogleChromePolicyVersionsV1UploadPolicyFileResponse;
    statusCode: number;
}
