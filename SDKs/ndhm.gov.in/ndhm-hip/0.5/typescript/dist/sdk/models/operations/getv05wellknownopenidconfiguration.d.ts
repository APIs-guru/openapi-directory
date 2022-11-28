import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV05WellKnownOpenidConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    openIdConfiguration?: shared.OpenIdConfiguration;
    statusCode: number;
}
