import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMessengerAccountPathParams extends SpeakeasyBase {
    externalId: string;
}
export declare class UpdateMessengerAccountRequestBody extends SpeakeasyBase {
    accessToken?: string;
    applications?: string[];
    name?: string;
}
export declare class UpdateMessengerAccountSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class UpdateMessengerAccount200ApplicationJson extends SpeakeasyBase {
    accessToken: string;
    apiKey: string;
    applications?: string[];
    externalId: string;
    name?: string;
    provider: string;
}
export declare class UpdateMessengerAccount400ApplicationJsonInvalidParams extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
export declare class UpdateMessengerAccount400ApplicationJson extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    invalidParams?: UpdateMessengerAccount400ApplicationJsonInvalidParams[];
    title?: string;
    type?: string;
}
export declare class UpdateMessengerAccountRequest extends SpeakeasyBase {
    pathParams: UpdateMessengerAccountPathParams;
    request: UpdateMessengerAccountRequestBody;
    security: UpdateMessengerAccountSecurity;
}
export declare class UpdateMessengerAccountResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;
    contentType: string;
    statusCode: number;
    updateMessengerAccount200ApplicationJsonObject?: UpdateMessengerAccount200ApplicationJson;
    updateMessengerAccount400ApplicationJsonObject?: UpdateMessengerAccount400ApplicationJson;
}
