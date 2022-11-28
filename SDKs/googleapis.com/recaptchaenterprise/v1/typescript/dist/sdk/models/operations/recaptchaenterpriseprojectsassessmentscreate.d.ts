import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsAssessmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecaptchaenterpriseProjectsAssessmentsCreateQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsAssessmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsAssessmentsCreateRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsAssessmentsCreatePathParams;
    queryParams: RecaptchaenterpriseProjectsAssessmentsCreateQueryParams;
    request?: shared.GoogleCloudRecaptchaenterpriseV1AssessmentInput;
    security: RecaptchaenterpriseProjectsAssessmentsCreateSecurity;
}
export declare class RecaptchaenterpriseProjectsAssessmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1Assessment?: shared.GoogleCloudRecaptchaenterpriseV1Assessment;
    statusCode: number;
}
