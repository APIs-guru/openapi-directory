import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsProvidersReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsProvidersReadRequest extends SpeakeasyBase {
    pathParams: CircuitsProvidersReadPathParams;
}
export declare class CircuitsProvidersReadResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
}
