import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObTransactionCardInstrument1AuthorisationTypeEnum {
    ConsumerDevice = "ConsumerDevice",
    Contactless = "Contactless",
    None = "None",
    Pin = "PIN"
}

export enum ObTransactionCardInstrument1CardSchemeNameEnum {
    AmericanExpress = "AmericanExpress",
    Diners = "Diners",
    Discover = "Discover",
    MasterCard = "MasterCard",
    Visa = "VISA"
}


// ObTransactionCardInstrument1
/** 
 * Set of elements to describe the card instrument used in the transaction.
**/
export class ObTransactionCardInstrument1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType?: ObTransactionCardInstrument1AuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CardSchemeName" })
  cardSchemeName: ObTransactionCardInstrument1CardSchemeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
