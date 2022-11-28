import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCreditCardSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateCreditCardDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateCreditCardRequest extends SpeakeasyBase {
    request: shared.CreditCard;
    security: CreateCreditCardSecurity;
}
export declare class CreateCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createCreditCard200ApplicationJsonObject?: Map<string, any>;
    createCreditCardDefaultApplicationJsonObject?: CreateCreditCardDefaultApplicationJson;
}
