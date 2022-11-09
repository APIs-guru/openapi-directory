import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetCreditCreditEnum {
    One = "1",
    Two = "2"
}
export declare class GetCreditQueryParams extends SpeakeasyBase {
    credit: GetCreditCreditEnum;
    keyid: string;
}
export declare class GetCreditRequest extends SpeakeasyBase {
    queryParams: GetCreditQueryParams;
}
export declare class GetCreditResponse extends SpeakeasyBase {
    contentType: string;
    creditResponse?: shared.CreditResponse;
    erreur?: shared.Erreur;
    statusCode: number;
}
