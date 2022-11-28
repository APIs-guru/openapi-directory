import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetIamPoliciesSearchAllPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetIamPoliciesSearchAllQueryParams extends SpeakeasyBase {
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
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetIamPoliciesSearchAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetIamPoliciesSearchAllRequest extends SpeakeasyBase {
    pathParams: CloudassetIamPoliciesSearchAllPathParams;
    queryParams: CloudassetIamPoliciesSearchAllQueryParams;
    security: CloudassetIamPoliciesSearchAllSecurity;
}
export declare class CloudassetIamPoliciesSearchAllResponse extends SpeakeasyBase {
    contentType: string;
    searchAllIamPoliciesResponse?: shared.SearchAllIamPoliciesResponse;
    statusCode: number;
}
