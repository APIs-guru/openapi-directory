import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePromoCreditRequestBody extends SpeakeasyBase {
    promoCode: string;
}
export declare class CreatePromoCreditSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreatePromoCreditDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreatePromoCreditRequest extends SpeakeasyBase {
    request?: CreatePromoCreditRequestBody;
    security: CreatePromoCreditSecurity;
}
export declare class CreatePromoCreditResponse extends SpeakeasyBase {
    contentType: string;
    promotion?: shared.Promotion;
    statusCode: number;
    createPromoCreditDefaultApplicationJsonObject?: CreatePromoCreditDefaultApplicationJson;
}
