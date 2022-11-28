import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON Body of a establish signing basket request.
 * The body shall contain at least one entry.
 *
**/
export declare class SigningBasket extends SpeakeasyBase {
    consentIds?: string[];
    paymentIds?: string[];
}
