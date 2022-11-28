import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgpolicyProjectsPoliciesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class OrgpolicyProjectsPoliciesDeleteQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyProjectsPoliciesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyProjectsPoliciesDeleteRequest extends SpeakeasyBase {
    pathParams: OrgpolicyProjectsPoliciesDeletePathParams;
    queryParams: OrgpolicyProjectsPoliciesDeleteQueryParams;
    security: OrgpolicyProjectsPoliciesDeleteSecurity;
}
export declare class OrgpolicyProjectsPoliciesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
