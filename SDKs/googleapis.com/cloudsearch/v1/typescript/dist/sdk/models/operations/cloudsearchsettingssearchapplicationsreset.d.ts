import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsSearchapplicationsResetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchSettingsSearchapplicationsResetQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchSettingsSearchapplicationsResetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsResetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsResetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsResetSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsSearchapplicationsResetSecurityOption1;
    option2?: CloudsearchSettingsSearchapplicationsResetSecurityOption2;
    option3?: CloudsearchSettingsSearchapplicationsResetSecurityOption3;
}
export declare class CloudsearchSettingsSearchapplicationsResetRequest extends SpeakeasyBase {
    pathParams: CloudsearchSettingsSearchapplicationsResetPathParams;
    queryParams: CloudsearchSettingsSearchapplicationsResetQueryParams;
    request?: shared.ResetSearchApplicationRequest;
    security: CloudsearchSettingsSearchapplicationsResetSecurity;
}
export declare class CloudsearchSettingsSearchapplicationsResetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
