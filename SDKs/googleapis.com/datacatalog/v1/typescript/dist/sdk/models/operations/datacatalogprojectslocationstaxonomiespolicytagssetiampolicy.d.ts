import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
