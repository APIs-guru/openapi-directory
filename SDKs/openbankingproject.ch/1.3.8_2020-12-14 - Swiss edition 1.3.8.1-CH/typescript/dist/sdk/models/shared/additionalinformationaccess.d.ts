import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
/**
 * Optional if supported by API provider.
 *
 * Is asking for additional information as added within this structured object.
 * The usage of this data element requires at least one of the entries "accounts",
 * "transactions" or "balances" also to be contained in the object.
 * If detailed accounts are referenced, it is required in addition that any account addressed within
 * the additionalInformation attribute is also addressed by at least one of the attributes "accounts",
 * "transactions" or "balances".
 *
**/
export declare class AdditionalInformationAccess extends SpeakeasyBase {
    ownerName?: AccountReference16Ch[];
    trustedBeneficiaries?: AccountReference16Ch[];
}
