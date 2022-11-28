import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsSearchapplicationsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchSettingsSearchapplicationsPatchQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchSettingsSearchapplicationsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsPatchSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsSearchapplicationsPatchSecurityOption1;
    option2?: CloudsearchSettingsSearchapplicationsPatchSecurityOption2;
    option3?: CloudsearchSettingsSearchapplicationsPatchSecurityOption3;
}
export declare class CloudsearchSettingsSearchapplicationsPatchRequest extends SpeakeasyBase {
    pathParams: CloudsearchSettingsSearchapplicationsPatchPathParams;
    queryParams: CloudsearchSettingsSearchapplicationsPatchQueryParams;
    request?: shared.SearchApplicationInput;
    security: CloudsearchSettingsSearchapplicationsPatchSecurity;
}
export declare class CloudsearchSettingsSearchapplicationsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
