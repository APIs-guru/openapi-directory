import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsSearchapplicationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchSettingsSearchapplicationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchSettingsSearchapplicationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsDeleteSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsSearchapplicationsDeleteSecurityOption1;
    option2?: CloudsearchSettingsSearchapplicationsDeleteSecurityOption2;
    option3?: CloudsearchSettingsSearchapplicationsDeleteSecurityOption3;
}
export declare class CloudsearchSettingsSearchapplicationsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudsearchSettingsSearchapplicationsDeletePathParams;
    queryParams: CloudsearchSettingsSearchapplicationsDeleteQueryParams;
    security: CloudsearchSettingsSearchapplicationsDeleteSecurity;
}
export declare class CloudsearchSettingsSearchapplicationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
