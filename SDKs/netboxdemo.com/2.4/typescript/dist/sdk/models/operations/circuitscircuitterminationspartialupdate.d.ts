import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTerminationsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitTerminationsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitTerminationsPartialUpdatePathParams;
    request: shared.WritableCircuitTerminationInput;
}
export declare class CircuitsCircuitTerminationsPartialUpdateResponse extends SpeakeasyBase {
    circuitTermination?: shared.CircuitTermination;
    contentType: string;
    statusCode: number;
}
