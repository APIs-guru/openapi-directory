import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmLoggingGwsSanitizeOptions } from "./enterprisecrmlogginggwssanitizeoptions";
import { EnterpriseCrmLoggingGwsFieldLimits } from "./enterprisecrmlogginggwsfieldlimits";
export declare enum EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum {
    SeedPeriodUnspecified = "SEED_PERIOD_UNSPECIFIED",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}
export declare enum EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum {
    SeedScopeUnspecified = "SEED_SCOPE_UNSPECIFIED",
    EventName = "EVENT_NAME",
    TimePeriod = "TIME_PERIOD",
    ParamName = "PARAM_NAME"
}
/**
 * The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information. See go/integration-platform/analytics/logging_task.md for details.
**/
export declare class EnterpriseCrmEventbusProtoLogSettings extends SpeakeasyBase {
    logFieldName?: string;
    sanitizeOptions?: EnterpriseCrmLoggingGwsSanitizeOptions;
    seedPeriod?: EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum;
    seedScope?: EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum;
    shorteningLimits?: EnterpriseCrmLoggingGwsFieldLimits;
}
