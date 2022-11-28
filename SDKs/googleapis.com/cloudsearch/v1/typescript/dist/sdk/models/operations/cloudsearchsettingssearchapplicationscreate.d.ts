import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsSearchapplicationsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchSettingsSearchapplicationsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsCreateSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsSearchapplicationsCreateSecurityOption1;
    option2?: CloudsearchSettingsSearchapplicationsCreateSecurityOption2;
    option3?: CloudsearchSettingsSearchapplicationsCreateSecurityOption3;
}
export declare class CloudsearchSettingsSearchapplicationsCreateRequest extends SpeakeasyBase {
    queryParams: CloudsearchSettingsSearchapplicationsCreateQueryParams;
    request?: shared.SearchApplicationInput;
    security: CloudsearchSettingsSearchapplicationsCreateSecurity;
}
export declare class CloudsearchSettingsSearchapplicationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
