import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTerminationsCreateRequest extends SpeakeasyBase {
    request: shared.WritableCircuitTerminationInput;
}
export declare class CircuitsCircuitTerminationsCreateResponse extends SpeakeasyBase {
    circuitTermination?: shared.CircuitTermination;
    contentType: string;
    statusCode: number;
}
