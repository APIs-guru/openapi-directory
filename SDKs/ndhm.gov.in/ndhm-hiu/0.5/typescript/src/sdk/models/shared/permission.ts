import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PermissionAccessModeEnum {
    View = "VIEW",
    Store = "STORE",
    Query = "QUERY",
    Stream = "STREAM"
}


export class PermissionDateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: Date;
}

export enum PermissionFrequencyUnitEnum {
    Hour = "HOUR",
    Week = "WEEK",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}


export class PermissionFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repeats" })
  repeats: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: PermissionFrequencyUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessMode" })
  accessMode: PermissionAccessModeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataEraseAt" })
  dataEraseAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange: PermissionDateRange;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: PermissionFrequency;
}
