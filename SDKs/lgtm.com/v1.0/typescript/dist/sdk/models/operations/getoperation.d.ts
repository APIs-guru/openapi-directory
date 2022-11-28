import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOperationPathParams extends SpeakeasyBase {
    operationId: number;
}
export declare class GetOperationSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetOperationRequest extends SpeakeasyBase {
    pathParams: GetOperationPathParams;
    security: GetOperationSecurity;
}
export declare class GetOperationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    operation?: shared.Operation;
}
