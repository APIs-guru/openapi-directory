import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsProvidersUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CircuitsProvidersUpdateRequest extends SpeakeasyBase {
    pathParams: CircuitsProvidersUpdatePathParams;
    request: shared.ProviderInput;
}
export declare class CircuitsProvidersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
}
