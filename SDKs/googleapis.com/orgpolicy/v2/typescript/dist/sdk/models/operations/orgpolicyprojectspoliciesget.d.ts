import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OrgpolicyProjectsPoliciesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OrgpolicyProjectsPoliciesGetQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyProjectsPoliciesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyProjectsPoliciesGetRequest extends SpeakeasyBase {
    pathParams: OrgpolicyProjectsPoliciesGetPathParams;
    queryParams: OrgpolicyProjectsPoliciesGetQueryParams;
    security: OrgpolicyProjectsPoliciesGetSecurity;
}
export declare class OrgpolicyProjectsPoliciesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudOrgpolicyV2Policy?: shared.GoogleCloudOrgpolicyV2Policy;
    statusCode: number;
}
