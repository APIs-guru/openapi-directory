import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BadgeExpiryExpiryTypeEnum {
    Date = "date",
    Timeframe = "timeframe"
}

export enum BadgeExpiryTimeframeUnitEnum {
    Days = "days",
    Months = "months",
    Years = "years"
}


export class BadgeExpiry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiryType" })
  expiryType?: BadgeExpiryExpiryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=timeframeAmount" })
  timeframeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=timeframeUnit" })
  timeframeUnit?: BadgeExpiryTimeframeUnitEnum;
}
