import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsKeysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecaptchaenterpriseProjectsKeysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RecaptchaenterpriseProjectsKeysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsKeysListRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsKeysListPathParams;
    queryParams: RecaptchaenterpriseProjectsKeysListQueryParams;
    security: RecaptchaenterpriseProjectsKeysListSecurity;
}
export declare class RecaptchaenterpriseProjectsKeysListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1ListKeysResponse?: shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse;
    statusCode: number;
}
