import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitsUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitsUpdatePathParams;
    request: shared.WritableCircuitInput;
}
export declare class CircuitsCircuitsUpdateResponse extends SpeakeasyBase {
    circuit?: shared.Circuit;
    contentType: string;
    statusCode: number;
}
