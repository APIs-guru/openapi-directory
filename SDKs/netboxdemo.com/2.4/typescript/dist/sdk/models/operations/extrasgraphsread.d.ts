import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasGraphsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasGraphsReadRequest extends SpeakeasyBase {
    pathParams: ExtrasGraphsReadPathParams;
}
export declare class ExtrasGraphsReadResponse extends SpeakeasyBase {
    contentType: string;
    graph?: shared.Graph;
    statusCode: number;
}
