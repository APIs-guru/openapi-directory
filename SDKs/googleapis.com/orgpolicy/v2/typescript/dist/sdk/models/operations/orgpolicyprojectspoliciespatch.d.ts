import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgpolicyProjectsPoliciesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OrgpolicyProjectsPoliciesPatchQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyProjectsPoliciesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyProjectsPoliciesPatchRequest extends SpeakeasyBase {
    pathParams: OrgpolicyProjectsPoliciesPatchPathParams;
    queryParams: OrgpolicyProjectsPoliciesPatchQueryParams;
    request?: shared.GoogleCloudOrgpolicyV2PolicyInput;
    security: OrgpolicyProjectsPoliciesPatchSecurity;
}
export declare class OrgpolicyProjectsPoliciesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudOrgpolicyV2Policy?: shared.GoogleCloudOrgpolicyV2Policy;
    statusCode: number;
}
