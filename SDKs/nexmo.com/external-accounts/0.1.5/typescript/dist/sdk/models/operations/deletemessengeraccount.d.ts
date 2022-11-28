import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMessengerAccountPathParams extends SpeakeasyBase {
    externalId: string;
}
export declare class DeleteMessengerAccountSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class DeleteMessengerAccountRequest extends SpeakeasyBase {
    pathParams: DeleteMessengerAccountPathParams;
    security: DeleteMessengerAccountSecurity;
}
export declare class DeleteMessengerAccountResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;
    contentType: string;
    statusCode: number;
}
