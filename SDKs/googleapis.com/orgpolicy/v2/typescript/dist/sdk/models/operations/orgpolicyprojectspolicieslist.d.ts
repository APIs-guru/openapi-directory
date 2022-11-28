import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgpolicyProjectsPoliciesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OrgpolicyProjectsPoliciesListQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyProjectsPoliciesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyProjectsPoliciesListRequest extends SpeakeasyBase {
    pathParams: OrgpolicyProjectsPoliciesListPathParams;
    queryParams: OrgpolicyProjectsPoliciesListQueryParams;
    security: OrgpolicyProjectsPoliciesListSecurity;
}
export declare class OrgpolicyProjectsPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudOrgpolicyV2ListPoliciesResponse?: shared.GoogleCloudOrgpolicyV2ListPoliciesResponse;
    statusCode: number;
}
