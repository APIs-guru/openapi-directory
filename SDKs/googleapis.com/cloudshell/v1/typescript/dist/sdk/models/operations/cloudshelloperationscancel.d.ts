import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudshellOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudshellOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class CloudshellOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudshellOperationsCancelRequest extends SpeakeasyBase {
    pathParams: CloudshellOperationsCancelPathParams;
    queryParams: CloudshellOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: CloudshellOperationsCancelSecurity;
}
export declare class CloudshellOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
