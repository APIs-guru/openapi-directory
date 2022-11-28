import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApiKeyPathParams extends SpeakeasyBase {
    clientId: string;
    serviceId: string;
}
export declare class DeleteApiKeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteApiKeyRequest extends SpeakeasyBase {
    pathParams: DeleteApiKeyPathParams;
    security: DeleteApiKeySecurity;
}
export declare class DeleteApiKeyResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
