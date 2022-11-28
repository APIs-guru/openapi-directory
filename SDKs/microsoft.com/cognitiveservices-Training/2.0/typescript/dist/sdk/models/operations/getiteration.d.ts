import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class GetIterationHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetIterationRequest extends SpeakeasyBase {
    pathParams: GetIterationPathParams;
    headers: GetIterationHeaders;
}
export declare class GetIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    iteration?: shared.Iteration;
    statusCode: number;
}
