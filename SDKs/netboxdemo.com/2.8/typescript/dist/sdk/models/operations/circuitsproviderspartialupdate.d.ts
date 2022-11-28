import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsProvidersPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsProvidersPartialUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsProvidersPartialUpdatePathParams;
    request: shared.ProviderInput;
}
export declare class CircuitsProvidersPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
}
