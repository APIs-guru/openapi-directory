import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTerminationsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitTerminationsReadRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitTerminationsReadPathParams;
}
export declare class CircuitsCircuitTerminationsReadResponse extends SpeakeasyBase {
    circuitTermination?: shared.CircuitTermination;
    contentType: string;
    statusCode: number;
}
