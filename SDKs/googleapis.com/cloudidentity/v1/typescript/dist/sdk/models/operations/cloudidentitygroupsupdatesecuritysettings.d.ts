import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsUpdateSecuritySettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityGroupsUpdateSecuritySettingsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsUpdateSecuritySettingsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsUpdateSecuritySettingsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsUpdateSecuritySettingsSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsUpdateSecuritySettingsSecurityOption1;
    option2?: CloudidentityGroupsUpdateSecuritySettingsSecurityOption2;
}
export declare class CloudidentityGroupsUpdateSecuritySettingsRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsUpdateSecuritySettingsPathParams;
    queryParams: CloudidentityGroupsUpdateSecuritySettingsQueryParams;
    request?: shared.SecuritySettingsInput;
    security: CloudidentityGroupsUpdateSecuritySettingsSecurity;
}
export declare class CloudidentityGroupsUpdateSecuritySettingsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
