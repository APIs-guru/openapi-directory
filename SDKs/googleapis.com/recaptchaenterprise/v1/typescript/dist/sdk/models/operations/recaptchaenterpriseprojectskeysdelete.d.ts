import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsKeysDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecaptchaenterpriseProjectsKeysDeleteQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsKeysDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsKeysDeleteRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsKeysDeletePathParams;
    queryParams: RecaptchaenterpriseProjectsKeysDeleteQueryParams;
    security: RecaptchaenterpriseProjectsKeysDeleteSecurity;
}
export declare class RecaptchaenterpriseProjectsKeysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
