import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamPoliciesListPoliciesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IamPoliciesListPoliciesQueryParams extends SpeakeasyBase {
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
export declare class IamPoliciesListPoliciesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamPoliciesListPoliciesRequest extends SpeakeasyBase {
    pathParams: IamPoliciesListPoliciesPathParams;
    queryParams: IamPoliciesListPoliciesQueryParams;
    security: IamPoliciesListPoliciesSecurity;
}
export declare class IamPoliciesListPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV2betaListPoliciesResponse?: shared.GoogleIamV2betaListPoliciesResponse;
    statusCode: number;
}
