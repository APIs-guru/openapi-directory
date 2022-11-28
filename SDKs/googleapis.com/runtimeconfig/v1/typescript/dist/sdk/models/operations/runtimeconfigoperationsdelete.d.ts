import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RuntimeconfigOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigOperationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigOperationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigOperationsDeleteSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigOperationsDeleteSecurityOption1;
    option2?: RuntimeconfigOperationsDeleteSecurityOption2;
}
export declare class RuntimeconfigOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigOperationsDeletePathParams;
    queryParams: RuntimeconfigOperationsDeleteQueryParams;
    security: RuntimeconfigOperationsDeleteSecurity;
}
export declare class RuntimeconfigOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
