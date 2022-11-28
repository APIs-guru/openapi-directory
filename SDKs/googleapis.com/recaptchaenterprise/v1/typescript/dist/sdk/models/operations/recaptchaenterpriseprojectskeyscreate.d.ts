import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsKeysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecaptchaenterpriseProjectsKeysCreateQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsKeysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsKeysCreateRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsKeysCreatePathParams;
    queryParams: RecaptchaenterpriseProjectsKeysCreateQueryParams;
    request?: shared.GoogleCloudRecaptchaenterpriseV1Key;
    security: RecaptchaenterpriseProjectsKeysCreateSecurity;
}
export declare class RecaptchaenterpriseProjectsKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1Key?: shared.GoogleCloudRecaptchaenterpriseV1Key;
    statusCode: number;
}
