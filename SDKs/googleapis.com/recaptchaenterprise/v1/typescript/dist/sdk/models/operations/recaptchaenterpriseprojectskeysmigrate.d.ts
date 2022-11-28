import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsKeysMigratePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecaptchaenterpriseProjectsKeysMigrateQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsKeysMigrateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsKeysMigrateRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsKeysMigratePathParams;
    queryParams: RecaptchaenterpriseProjectsKeysMigrateQueryParams;
    request?: Map<string, any>;
    security: RecaptchaenterpriseProjectsKeysMigrateSecurity;
}
export declare class RecaptchaenterpriseProjectsKeysMigrateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1Key?: shared.GoogleCloudRecaptchaenterpriseV1Key;
    statusCode: number;
}
