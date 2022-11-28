import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PermissionAccessModeEnum {
    View = "VIEW",
    Store = "STORE",
    Query = "QUERY",
    Stream = "STREAM"
}
export declare class PermissionDateRange extends SpeakeasyBase {
    from?: Date;
    to?: Date;
}
export declare enum PermissionFrequencyUnitEnum {
    Hour = "HOUR",
    Week = "WEEK",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}
export declare class PermissionFrequency extends SpeakeasyBase {
    repeats?: number;
    unit?: PermissionFrequencyUnitEnum;
    value?: number;
}
export declare class Permission extends SpeakeasyBase {
    accessMode: PermissionAccessModeEnum;
    dataEraseAt: Date;
    dateRange: PermissionDateRange;
    frequency: PermissionFrequency;
}
