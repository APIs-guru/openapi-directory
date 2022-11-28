import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsWaitersDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RuntimeconfigProjectsConfigsWaitersDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    recursive?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersDeleteSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsWaitersDeleteRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsWaitersDeletePathParams;
    queryParams: RuntimeconfigProjectsConfigsWaitersDeleteQueryParams;
    security: RuntimeconfigProjectsConfigsWaitersDeleteSecurity;
}
export declare class RuntimeconfigProjectsConfigsWaitersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
