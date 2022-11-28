import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsKeysGetMetricsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecaptchaenterpriseProjectsKeysGetMetricsQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsKeysGetMetricsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsKeysGetMetricsRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsKeysGetMetricsPathParams;
    queryParams: RecaptchaenterpriseProjectsKeysGetMetricsQueryParams;
    security: RecaptchaenterpriseProjectsKeysGetMetricsSecurity;
}
export declare class RecaptchaenterpriseProjectsKeysGetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1Metrics?: shared.GoogleCloudRecaptchaenterpriseV1Metrics;
    statusCode: number;
}
