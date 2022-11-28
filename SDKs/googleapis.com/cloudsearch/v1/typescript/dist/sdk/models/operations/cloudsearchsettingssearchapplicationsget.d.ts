import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsSearchapplicationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchSettingsSearchapplicationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchSettingsSearchapplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsSearchapplicationsGetSecurityOption1;
    option2?: CloudsearchSettingsSearchapplicationsGetSecurityOption2;
    option3?: CloudsearchSettingsSearchapplicationsGetSecurityOption3;
}
export declare class CloudsearchSettingsSearchapplicationsGetRequest extends SpeakeasyBase {
    pathParams: CloudsearchSettingsSearchapplicationsGetPathParams;
    queryParams: CloudsearchSettingsSearchapplicationsGetQueryParams;
    security: CloudsearchSettingsSearchapplicationsGetSecurity;
}
export declare class CloudsearchSettingsSearchapplicationsGetResponse extends SpeakeasyBase {
    contentType: string;
    searchApplication?: shared.SearchApplication;
    statusCode: number;
}
