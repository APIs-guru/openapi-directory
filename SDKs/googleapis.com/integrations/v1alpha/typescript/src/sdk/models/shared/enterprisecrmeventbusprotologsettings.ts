import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmLoggingGwsSanitizeOptions } from "./enterprisecrmlogginggwssanitizeoptions";
import { EnterpriseCrmLoggingGwsFieldLimits } from "./enterprisecrmlogginggwsfieldlimits";

export enum EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum {
    SeedPeriodUnspecified = "SEED_PERIOD_UNSPECIFIED"
,    Day = "DAY"
,    Week = "WEEK"
,    Month = "MONTH"
}

export enum EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum {
    SeedScopeUnspecified = "SEED_SCOPE_UNSPECIFIED"
,    EventName = "EVENT_NAME"
,    TimePeriod = "TIME_PERIOD"
,    ParamName = "PARAM_NAME"
}


// EnterpriseCrmEventbusProtoLogSettings
/** 
 * The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information. See go/integration-platform/analytics/logging_task.md for details.
**/
export class EnterpriseCrmEventbusProtoLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=logFieldName" })
  logFieldName?: string;

  @Metadata({ data: "json, name=sanitizeOptions" })
  sanitizeOptions?: EnterpriseCrmLoggingGwsSanitizeOptions;

  @Metadata({ data: "json, name=seedPeriod" })
  seedPeriod?: EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum;

  @Metadata({ data: "json, name=seedScope" })
  seedScope?: EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum;

  @Metadata({ data: "json, name=shorteningLimits" })
  shorteningLimits?: EnterpriseCrmLoggingGwsFieldLimits;
}
