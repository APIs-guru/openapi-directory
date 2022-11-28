import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetSearchAllIamPoliciesPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetSearchAllIamPoliciesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    assetTypes?: string[];
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetSearchAllIamPoliciesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetSearchAllIamPoliciesRequest extends SpeakeasyBase {
    pathParams: CloudassetSearchAllIamPoliciesPathParams;
    queryParams: CloudassetSearchAllIamPoliciesQueryParams;
    security: CloudassetSearchAllIamPoliciesSecurity;
}
export declare class CloudassetSearchAllIamPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    searchAllIamPoliciesResponse?: shared.SearchAllIamPoliciesResponse;
    statusCode: number;
}
