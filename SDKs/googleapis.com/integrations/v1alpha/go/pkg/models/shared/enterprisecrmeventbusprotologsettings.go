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
	LogFieldName     *string                                              `json:"logFieldName"`
	SanitizeOptions  *EnterpriseCrmLoggingGwsSanitizeOptions              `json:"sanitizeOptions"`
	SeedPeriod       *EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum `json:"seedPeriod"`
	SeedScope        *EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum  `json:"seedScope"`
	ShorteningLimits *EnterpriseCrmLoggingGwsFieldLimits                  `json:"shorteningLimits"`
}
