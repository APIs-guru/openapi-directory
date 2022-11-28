import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsProvidersGraphsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsProvidersGraphsRequest extends SpeakeasyBase {
    pathParams: CircuitsProvidersGraphsPathParams;
}
export declare class CircuitsProvidersGraphsResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
}
