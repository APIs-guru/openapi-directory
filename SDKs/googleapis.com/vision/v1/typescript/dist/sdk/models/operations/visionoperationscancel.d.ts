import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VisionOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class VisionOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionOperationsCancelSecurity extends SpeakeasyBase {
    option1?: VisionOperationsCancelSecurityOption1;
    option2?: VisionOperationsCancelSecurityOption2;
}
export declare class VisionOperationsCancelRequest extends SpeakeasyBase {
    pathParams: VisionOperationsCancelPathParams;
    queryParams: VisionOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: VisionOperationsCancelSecurity;
}
export declare class VisionOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
