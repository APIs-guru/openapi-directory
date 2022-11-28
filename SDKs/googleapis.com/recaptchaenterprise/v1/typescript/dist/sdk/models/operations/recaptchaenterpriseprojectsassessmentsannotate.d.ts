import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsAssessmentsAnnotateRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams;
    queryParams: RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams;
    request?: shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
    security: RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity;
}
export declare class RecaptchaenterpriseProjectsAssessmentsAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse?: Map<string, any>;
    statusCode: number;
}
