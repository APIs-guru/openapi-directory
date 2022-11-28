import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsMuteConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsMuteConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    muteConfigId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsMuteConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsMuteConfigsCreateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsMuteConfigsCreatePathParams;
    queryParams: SecuritycenterProjectsMuteConfigsCreateQueryParams;
    request?: shared.GoogleCloudSecuritycenterV1MuteConfigInput;
    security: SecuritycenterProjectsMuteConfigsCreateSecurity;
}
export declare class SecuritycenterProjectsMuteConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudSecuritycenterV1MuteConfig?: shared.GoogleCloudSecuritycenterV1MuteConfig;
    statusCode: number;
}
