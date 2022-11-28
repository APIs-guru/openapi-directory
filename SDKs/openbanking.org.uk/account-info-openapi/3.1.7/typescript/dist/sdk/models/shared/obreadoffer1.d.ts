import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Amount of money associated with the offer type.
**/
export declare class ObReadOffer1DataOfferAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Fee associated with the offer type.
**/
export declare class ObReadOffer1DataOfferFee extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare enum ObReadOffer1DataOfferOfferTypeEnum {
    BalanceTransfer = "BalanceTransfer",
    LimitIncrease = "LimitIncrease",
    MoneyTransfer = "MoneyTransfer",
    Other = "Other",
    PromotionalRate = "PromotionalRate"
}
export declare class ObReadOffer1DataOffer extends SpeakeasyBase {
    accountId: string;
    amount?: ObReadOffer1DataOfferAmount;
    description?: string;
    endDateTime?: Date;
    fee?: ObReadOffer1DataOfferFee;
    offerId?: string;
    offerType?: ObReadOffer1DataOfferOfferTypeEnum;
    rate?: string;
    startDateTime?: Date;
    term?: string;
    url?: string;
    value?: number;
}
export declare class ObReadOffer1Data extends SpeakeasyBase {
    offer?: ObReadOffer1DataOffer[];
}
export declare class ObReadOffer1 extends SpeakeasyBase {
    data: ObReadOffer1Data;
    links?: Links;
    meta?: Meta;
}
