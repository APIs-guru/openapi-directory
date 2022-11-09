import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Links } from "./links";
import { Meta } from "./meta";


// ObReadOffer1DataOfferAmount
/** 
 * Amount of money associated with the offer type.
**/
export class ObReadOffer1DataOfferAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObReadOffer1DataOfferFee
/** 
 * Fee associated with the offer type.
**/
export class ObReadOffer1DataOfferFee extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObReadOffer1DataOfferOfferTypeEnum {
    BalanceTransfer = "BalanceTransfer"
,    LimitIncrease = "LimitIncrease"
,    MoneyTransfer = "MoneyTransfer"
,    Other = "Other"
,    PromotionalRate = "PromotionalRate"
}


export class ObReadOffer1DataOffer extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=Amount" })
  amount?: ObReadOffer1DataOfferAmount;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=Fee" })
  fee?: ObReadOffer1DataOfferFee;

  @Metadata({ data: "json, name=OfferId" })
  offerId?: string;

  @Metadata({ data: "json, name=OfferType" })
  offerType?: ObReadOffer1DataOfferOfferTypeEnum;

  @Metadata({ data: "json, name=Rate" })
  rate?: string;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=Term" })
  term?: string;

  @Metadata({ data: "json, name=URL" })
  url?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}


export class ObReadOffer1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Offer", elemType: shared.ObReadOffer1DataOffer })
  offer?: ObReadOffer1DataOffer[];
}


export class ObReadOffer1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadOffer1Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
