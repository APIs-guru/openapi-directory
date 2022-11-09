import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PermissionAccessModeEnum {
    View = "VIEW"
,    Store = "STORE"
,    Query = "QUERY"
,    Stream = "STREAM"
}


export class PermissionDateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from: Date;

  @Metadata({ data: "json, name=to" })
  to: Date;
}

export enum PermissionFrequencyUnitEnum {
    Hour = "HOUR"
,    Week = "WEEK"
,    Day = "DAY"
,    Month = "MONTH"
,    Year = "YEAR"
}


export class PermissionFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=repeats" })
  repeats: number;

  @Metadata({ data: "json, name=unit" })
  unit: PermissionFrequencyUnitEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessMode" })
  accessMode: PermissionAccessModeEnum;

  @Metadata({ data: "json, name=dataEraseAt" })
  dataEraseAt: Date;

  @Metadata({ data: "json, name=dateRange" })
  dateRange: PermissionDateRange;

  @Metadata({ data: "json, name=frequency" })
  frequency: PermissionFrequency;
}
