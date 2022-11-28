import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsWaitersGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RuntimeconfigProjectsConfigsWaitersGetQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsWaitersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersGetSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsWaitersGetSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsWaitersGetSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsWaitersGetRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsWaitersGetPathParams;
    queryParams: RuntimeconfigProjectsConfigsWaitersGetQueryParams;
    security: RuntimeconfigProjectsConfigsWaitersGetSecurity;
}
export declare class RuntimeconfigProjectsConfigsWaitersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    waiter?: shared.Waiter;
}
