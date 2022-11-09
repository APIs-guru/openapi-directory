import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceconsumermanagementOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ServiceconsumermanagementOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementOperationsCancelPathParams;
    queryParams: ServiceconsumermanagementOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: ServiceconsumermanagementOperationsCancelSecurity;
}
export declare class ServiceconsumermanagementOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
