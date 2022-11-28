import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeKeyPathParams extends SpeakeasyBase {
    key: string;
}
export declare class RevokeKeySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RevokeKeyRequest extends SpeakeasyBase {
    pathParams: RevokeKeyPathParams;
    security: RevokeKeySecurity;
}
export declare class RevokeKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
