import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitsPartialUpdatePathParams;
    request: shared.WritableCircuitInput;
}
export declare class CircuitsCircuitsPartialUpdateResponse extends SpeakeasyBase {
    circuit?: shared.Circuit;
    contentType: string;
    statusCode: number;
}
