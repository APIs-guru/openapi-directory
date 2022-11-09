import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class VaultOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class VaultOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: VaultOperationsDeletePathParams;
    queryParams: VaultOperationsDeleteQueryParams;
}
export declare class VaultOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
