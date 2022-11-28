import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsCircuitsReadRequest extends SpeakeasyBase {
    pathParams: CircuitsCircuitsReadPathParams;
}
export declare class CircuitsCircuitsReadResponse extends SpeakeasyBase {
    circuit?: shared.Circuit;
    contentType: string;
    statusCode: number;
}
