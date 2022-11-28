import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsSearchapplicationsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchSettingsSearchapplicationsUpdateQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchSettingsSearchapplicationsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsUpdateSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsSearchapplicationsUpdateSecurityOption1;
    option2?: CloudsearchSettingsSearchapplicationsUpdateSecurityOption2;
    option3?: CloudsearchSettingsSearchapplicationsUpdateSecurityOption3;
}
export declare class CloudsearchSettingsSearchapplicationsUpdateRequest extends SpeakeasyBase {
    pathParams: CloudsearchSettingsSearchapplicationsUpdatePathParams;
    queryParams: CloudsearchSettingsSearchapplicationsUpdateQueryParams;
    request?: shared.SearchApplicationInput;
    security: CloudsearchSettingsSearchapplicationsUpdateSecurity;
}
export declare class CloudsearchSettingsSearchapplicationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
