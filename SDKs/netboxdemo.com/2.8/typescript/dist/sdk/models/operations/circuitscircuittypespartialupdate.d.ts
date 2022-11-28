import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitTypesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitTypesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitTypesPartialUpdatePathParams;
    request: shared.CircuitTypeInput;
}
export declare class CircuitsCircuitTypesPartialUpdateResponse extends SpeakeasyBase {
    circuitType?: shared.CircuitType;
    contentType: string;
    statusCode: number;
}
