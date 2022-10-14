package shared

type EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum string

const (
	EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnumSeedPeriodUnspecified EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum = "SEED_PERIOD_UNSPECIFIED"
	EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnumDay                   EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum = "DAY"
	EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnumWeek                  EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum = "WEEK"
	EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnumMonth                 EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum = "MONTH"
)

type EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum string

const (
	EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnumSeedScopeUnspecified EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum = "SEED_SCOPE_UNSPECIFIED"
	EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnumEventName            EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum = "EVENT_NAME"
	EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnumTimePeriod           EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum = "TIME_PERIOD"
	EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnumParamName            EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum = "PARAM_NAME"
)

type EnterpriseCrmEventbusProtoLogSettings struct {
	LogFieldName     *string                                              `json:"logFieldName,omitempty"`
	SanitizeOptions  *EnterpriseCrmLoggingGwsSanitizeOptions              `json:"sanitizeOptions,omitempty"`
	SeedPeriod       *EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum `json:"seedPeriod,omitempty"`
	SeedScope        *EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum  `json:"seedScope,omitempty"`
	ShorteningLimits *EnterpriseCrmLoggingGwsFieldLimits                  `json:"shorteningLimits,omitempty"`
}
