import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasGraphsCreateRequest extends SpeakeasyBase {
    request: shared.GraphInput;
}
export declare class ExtrasGraphsCreateResponse extends SpeakeasyBase {
    contentType: string;
    graph?: shared.Graph;
    statusCode: number;
}
