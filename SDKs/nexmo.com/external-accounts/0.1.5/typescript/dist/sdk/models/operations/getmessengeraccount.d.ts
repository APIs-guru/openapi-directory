import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessengerAccountPathParams extends SpeakeasyBase {
    externalId: string;
}
export declare class GetMessengerAccountSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMessengerAccountRequest extends SpeakeasyBase {
    pathParams: GetMessengerAccountPathParams;
    security: GetMessengerAccountSecurity;
}
export declare class GetMessengerAccountResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    messengerAccountResponse?: shared.MessengerAccountResponse;
    statusCode: number;
}
