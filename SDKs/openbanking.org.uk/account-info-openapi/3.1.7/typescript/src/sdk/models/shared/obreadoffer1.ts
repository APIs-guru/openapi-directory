import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";



// ObReadOffer1DataOfferAmount
/** 
 * Amount of money associated with the offer type.
**/
export class ObReadOffer1DataOfferAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObReadOffer1DataOfferFee
/** 
 * Fee associated with the offer type.
**/
export class ObReadOffer1DataOfferFee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObReadOffer1DataOfferOfferTypeEnum {
    BalanceTransfer = "BalanceTransfer",
    LimitIncrease = "LimitIncrease",
    MoneyTransfer = "MoneyTransfer",
    Other = "Other",
    PromotionalRate = "PromotionalRate"
}


export class ObReadOffer1DataOffer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: ObReadOffer1DataOfferAmount;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Fee" })
  fee?: ObReadOffer1DataOfferFee;

  @SpeakeasyMetadata({ data: "json, name=OfferId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=OfferType" })
  offerType?: ObReadOffer1DataOfferOfferTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=URL" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}


export class ObReadOffer1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Offer", elemType: ObReadOffer1DataOffer })
  offer?: ObReadOffer1DataOffer[];
}


export class ObReadOffer1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadOffer1Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
