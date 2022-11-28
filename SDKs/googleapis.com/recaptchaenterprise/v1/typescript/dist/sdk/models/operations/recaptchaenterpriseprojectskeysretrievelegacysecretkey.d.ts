import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams extends SpeakeasyBase {
    key: string;
}
export declare class RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams;
    queryParams: RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams;
    security: RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity;
}
export declare class RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse?: shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse;
    statusCode: number;
}
