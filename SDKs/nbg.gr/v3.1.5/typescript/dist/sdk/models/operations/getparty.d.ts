import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPartyHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetPartySecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetPartyRequest extends SpeakeasyBase {
    headers: GetPartyHeaders;
    security: GetPartySecurity;
}
export declare class GetPartyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadParty2?: shared.ObReadParty2;
    statusCode: number;
}
