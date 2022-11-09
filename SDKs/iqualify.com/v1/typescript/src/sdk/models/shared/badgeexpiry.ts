import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BadgeExpiryExpiryTypeEnum {
    Date = "date"
,    Timeframe = "timeframe"
}

export enum BadgeExpiryTimeframeUnitEnum {
    Days = "days"
,    Months = "months"
,    Years = "years"
}


export class BadgeExpiry extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=expires" })
  expires?: boolean;

  @Metadata({ data: "json, name=expiryType" })
  expiryType?: BadgeExpiryExpiryTypeEnum;

  @Metadata({ data: "json, name=timeframeAmount" })
  timeframeAmount?: number;

  @Metadata({ data: "json, name=timeframeUnit" })
  timeframeUnit?: BadgeExpiryTimeframeUnitEnum;
}
