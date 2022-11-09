import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BucketByTimePeriodTypeEnum {
    Day = "day"
,    Week = "week"
,    Month = "month"
}


export class BucketByTimePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeZoneId" })
  timeZoneId?: string;

  @Metadata({ data: "json, name=type" })
  type?: BucketByTimePeriodTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
