import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VaultOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class VaultOperationsCancelRequest extends SpeakeasyBase {
    pathParams: VaultOperationsCancelPathParams;
    queryParams: VaultOperationsCancelQueryParams;
    request?: Map<string, any>;
}
export declare class VaultOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
