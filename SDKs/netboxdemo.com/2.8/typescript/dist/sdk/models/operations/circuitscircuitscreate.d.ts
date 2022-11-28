import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitsCreateRequest extends SpeakeasyBase {
    request: shared.WritableCircuitInput;
}
export declare class CircuitsCircuitsCreateResponse extends SpeakeasyBase {
    circuit?: shared.Circuit;
    contentType: string;
    statusCode: number;
}
