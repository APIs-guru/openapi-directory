import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
