import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferTransferOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class StoragetransferTransferOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferTransferOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferTransferOperationsCancelRequest extends SpeakeasyBase {
    pathParams: StoragetransferTransferOperationsCancelPathParams;
    queryParams: StoragetransferTransferOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: StoragetransferTransferOperationsCancelSecurity;
}
export declare class StoragetransferTransferOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
