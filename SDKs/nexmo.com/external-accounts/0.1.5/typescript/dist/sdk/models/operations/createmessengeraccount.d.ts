import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMessengerAccountRequestBody extends SpeakeasyBase {
    accessToken: string;
    applications?: string[];
    externalId: string;
    name?: string;
}
export declare class CreateMessengerAccountSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class CreateMessengerAccount400ApplicationJsonInvalidParams extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
export declare class CreateMessengerAccount400ApplicationJson extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    invalidParams?: CreateMessengerAccount400ApplicationJsonInvalidParams[];
    title?: string;
    type?: string;
}
export declare class CreateMessengerAccountRequest extends SpeakeasyBase {
    request: CreateMessengerAccountRequestBody;
    security: CreateMessengerAccountSecurity;
}
export declare class CreateMessengerAccountResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;
    contentType: string;
    createMessengerAccount400ApplicationJsonObject?: CreateMessengerAccount400ApplicationJson;
    messengerAccountResponse?: shared.MessengerAccountResponse;
    statusCode: number;
}
