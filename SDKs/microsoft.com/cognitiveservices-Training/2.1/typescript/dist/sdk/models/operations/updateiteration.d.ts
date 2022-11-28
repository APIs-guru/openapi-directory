import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class UpdateIterationHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class UpdateIterationRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    iteration?: shared.IterationInput;
    iteration1?: shared.IterationInput;
    iteration2?: shared.IterationInput;
    textXml: Uint8Array;
}
export declare class UpdateIterationRequest extends SpeakeasyBase {
    pathParams: UpdateIterationPathParams;
    headers: UpdateIterationHeaders;
    request: UpdateIterationRequestsInput;
}
export declare class UpdateIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    iteration?: shared.Iteration;
    statusCode: number;
}
