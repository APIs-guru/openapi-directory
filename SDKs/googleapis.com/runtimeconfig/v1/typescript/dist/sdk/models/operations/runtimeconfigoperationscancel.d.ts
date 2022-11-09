import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RuntimeconfigOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RuntimeconfigOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigOperationsCancelSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigOperationsCancelSecurityOption1;
    option2?: RuntimeconfigOperationsCancelSecurityOption2;
}
export declare class RuntimeconfigOperationsCancelRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigOperationsCancelPathParams;
    queryParams: RuntimeconfigOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: RuntimeconfigOperationsCancelSecurity;
}
export declare class RuntimeconfigOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
