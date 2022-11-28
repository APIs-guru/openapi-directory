import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasGraphsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasGraphsUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasGraphsUpdatePathParams;
    request: shared.GraphInput;
}
export declare class ExtrasGraphsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    graph?: shared.Graph;
    statusCode: number;
}
