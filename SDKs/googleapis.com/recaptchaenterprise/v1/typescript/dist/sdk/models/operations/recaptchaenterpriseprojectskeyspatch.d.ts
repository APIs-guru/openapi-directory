import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsKeysPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecaptchaenterpriseProjectsKeysPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RecaptchaenterpriseProjectsKeysPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsKeysPatchRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsKeysPatchPathParams;
    queryParams: RecaptchaenterpriseProjectsKeysPatchQueryParams;
    request?: shared.GoogleCloudRecaptchaenterpriseV1Key;
    security: RecaptchaenterpriseProjectsKeysPatchSecurity;
}
export declare class RecaptchaenterpriseProjectsKeysPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1Key?: shared.GoogleCloudRecaptchaenterpriseV1Key;
    statusCode: number;
}
