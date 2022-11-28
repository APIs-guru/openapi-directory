import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObTransactionCardInstrument1AuthorisationTypeEnum {
    ConsumerDevice = "ConsumerDevice",
    Contactless = "Contactless",
    None = "None",
    Pin = "PIN"
}
export declare enum ObTransactionCardInstrument1CardSchemeNameEnum {
    AmericanExpress = "AmericanExpress",
    Diners = "Diners",
    Discover = "Discover",
    MasterCard = "MasterCard",
    Visa = "VISA"
}
/**
 * Set of elements to describe the card instrument used in the transaction.
**/
export declare class ObTransactionCardInstrument1 extends SpeakeasyBase {
    authorisationType?: ObTransactionCardInstrument1AuthorisationTypeEnum;
    cardSchemeName: ObTransactionCardInstrument1CardSchemeNameEnum;
    identification?: string;
    name?: string;
}
