import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams extends SpeakeasyBase {
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
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest extends SpeakeasyBase {
    pathParams: RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams;
    queryParams: RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams;
    security: RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity;
}
export declare class RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse?: shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse;
    statusCode: number;
}
