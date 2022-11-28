import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceusageOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageOperationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageOperationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageOperationsDeleteSecurity extends SpeakeasyBase {
    option1?: ServiceusageOperationsDeleteSecurityOption1;
    option2?: ServiceusageOperationsDeleteSecurityOption2;
}
export declare class ServiceusageOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: ServiceusageOperationsDeletePathParams;
    queryParams: ServiceusageOperationsDeleteQueryParams;
    security: ServiceusageOperationsDeleteSecurity;
}
export declare class ServiceusageOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
