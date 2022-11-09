import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteTokenPathParams extends SpeakeasyBase {
    tokenNumber: string;
}
export declare class DeleteTokenSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DeleteTokenRequest extends SpeakeasyBase {
    pathParams: DeleteTokenPathParams;
    security: DeleteTokenSecurity;
}
export declare class DeleteTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
