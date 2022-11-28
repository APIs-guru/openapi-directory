import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams extends SpeakeasyBase {
    project: string;
}
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams;
    queryParams: RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams;
    request?: shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest;
    security: RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity;
}
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse?: shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse;
    statusCode: number;
}
