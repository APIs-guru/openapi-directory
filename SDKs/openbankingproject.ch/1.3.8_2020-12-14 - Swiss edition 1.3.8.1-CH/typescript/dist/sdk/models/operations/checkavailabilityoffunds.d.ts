import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckAvailabilityOfFundsHeaders extends SpeakeasyBase {
    authorization?: string;
    digest?: string;
    signature?: string;
    tppSignatureCertificate?: string;
    xRequestId: string;
}
export declare class CheckAvailabilityOfFundsSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
/**
 * Equals "true" if sufficient funds are available at the time of the request,
 * "false" otherwise.
 *
**/
export declare class CheckAvailabilityOfFunds200ApplicationJson extends SpeakeasyBase {
    fundsAvailable: boolean;
}
export declare class CheckAvailabilityOfFundsRequest extends SpeakeasyBase {
    headers: CheckAvailabilityOfFundsHeaders;
    request: shared.ConfirmationOfFunds;
    security: CheckAvailabilityOfFundsSecurity;
}
export declare class CheckAvailabilityOfFundsResponse extends SpeakeasyBase {
    contentType: string;
    error400Ais?: shared.Error400Ais;
    error400NgAis?: shared.Error400NgAis;
    error401NgPiis?: shared.Error401NgPiis;
    error401Piis?: shared.Error401Piis;
    error403NgPiis?: shared.Error403NgPiis;
    error403Piis?: shared.Error403Piis;
    error404NgPiis?: shared.Error404NgPiis;
    error404Piis?: shared.Error404Piis;
    error405NgPiis?: shared.Error405NgPiis;
    error405Piis?: shared.Error405Piis;
    error409NgPiis?: shared.Error409NgPiis;
    error409Piis?: shared.Error409Piis;
    headers: Map<string, string[]>;
    statusCode: number;
    checkAvailabilityOfFunds200ApplicationJsonObject?: CheckAvailabilityOfFunds200ApplicationJson;
}
