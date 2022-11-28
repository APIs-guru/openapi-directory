import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetEffectiveIamPoliciesBatchGetPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetEffectiveIamPoliciesBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    names?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetEffectiveIamPoliciesBatchGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetEffectiveIamPoliciesBatchGetRequest extends SpeakeasyBase {
    pathParams: CloudassetEffectiveIamPoliciesBatchGetPathParams;
    queryParams: CloudassetEffectiveIamPoliciesBatchGetQueryParams;
    security: CloudassetEffectiveIamPoliciesBatchGetSecurity;
}
export declare class CloudassetEffectiveIamPoliciesBatchGetResponse extends SpeakeasyBase {
    batchGetEffectiveIamPoliciesResponse?: shared.BatchGetEffectiveIamPoliciesResponse;
    contentType: string;
    statusCode: number;
}
