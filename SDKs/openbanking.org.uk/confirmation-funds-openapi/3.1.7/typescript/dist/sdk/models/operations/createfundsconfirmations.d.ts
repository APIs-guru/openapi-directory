import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFundsConfirmationsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class CreateFundsConfirmationsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateFundsConfirmationsRequest extends SpeakeasyBase {
    headers: CreateFundsConfirmationsHeaders;
    request: shared.ObFundsConfirmation1;
    security: CreateFundsConfirmationsSecurity;
}
export declare class CreateFundsConfirmationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obFundsConfirmationResponse1?: shared.ObFundsConfirmationResponse1;
    statusCode: number;
}
