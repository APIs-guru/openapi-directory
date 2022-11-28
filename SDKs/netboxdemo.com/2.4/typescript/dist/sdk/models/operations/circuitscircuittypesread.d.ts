import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTypesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitTypesReadRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitTypesReadPathParams;
}
export declare class CircuitsCircuitTypesReadResponse extends SpeakeasyBase {
    circuitType?: shared.CircuitType;
    contentType: string;
    statusCode: number;
}
