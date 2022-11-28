import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasGraphsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasGraphsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasGraphsPartialUpdatePathParams;
    request: shared.GraphInput;
}
export declare class ExtrasGraphsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    graph?: shared.Graph;
    statusCode: number;
}
