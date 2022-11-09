import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkerArchitectureNameWorkerIdPathParams extends SpeakeasyBase {
    architectureName: string;
    workerId: string;
}
export declare class GetWorkerArchitectureNameWorkerIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetWorkerArchitectureNameWorkerIdRequest extends SpeakeasyBase {
    pathParams: GetWorkerArchitectureNameWorkerIdPathParams;
    security: GetWorkerArchitectureNameWorkerIdSecurity;
}
export declare class GetWorkerArchitectureNameWorkerIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
