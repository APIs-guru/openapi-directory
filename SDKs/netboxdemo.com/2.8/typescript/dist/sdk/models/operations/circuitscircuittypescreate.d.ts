import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTypesCreateRequest extends SpeakeasyBase {
    request: shared.CircuitTypeInput;
}
export declare class CircuitsCircuitTypesCreateResponse extends SpeakeasyBase {
    circuitType?: shared.CircuitType;
    contentType: string;
    statusCode: number;
}
