import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsProvidersCreateRequest extends SpeakeasyBase {
    request: shared.ProviderInput;
}
export declare class CircuitsProvidersCreateResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
}
