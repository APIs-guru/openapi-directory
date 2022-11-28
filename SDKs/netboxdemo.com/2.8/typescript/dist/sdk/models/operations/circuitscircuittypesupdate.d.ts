import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTypesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitTypesUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitTypesUpdatePathParams;
    request: shared.CircuitTypeInput;
}
export declare class CircuitsCircuitTypesUpdateResponse extends SpeakeasyBase {
    circuitType?: shared.CircuitType;
    contentType: string;
    statusCode: number;
}
