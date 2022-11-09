import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteRequestIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteRequestIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteRequestIdRequest extends SpeakeasyBase {
    pathParams: DeleteRequestIdPathParams;
    security: DeleteRequestIdSecurity;
}
export declare class DeleteRequestIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
