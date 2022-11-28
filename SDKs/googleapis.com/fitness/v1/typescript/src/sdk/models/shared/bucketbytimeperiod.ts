import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BucketByTimePeriodTypeEnum {
    Day = "day",
    Week = "week",
    Month = "month"
}


export class BucketByTimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeZoneId" })
  timeZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BucketByTimePeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
