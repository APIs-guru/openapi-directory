import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTerminationsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitTerminationsUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitTerminationsUpdatePathParams;
    request: shared.WritableCircuitTerminationInput;
}
export declare class CircuitsCircuitTerminationsUpdateResponse extends SpeakeasyBase {
    circuitTermination?: shared.CircuitTermination;
    contentType: string;
    statusCode: number;
}
