package shared

type UpgradeSettingsStrategyEnum string

const (
	UpgradeSettingsStrategyEnumNodePoolUpdateStrategyUnspecified UpgradeSettingsStrategyEnum = "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
	UpgradeSettingsStrategyEnumBlueGreen                         UpgradeSettingsStrategyEnum = "BLUE_GREEN"
	UpgradeSettingsStrategyEnumSurge                             UpgradeSettingsStrategyEnum = "SURGE"
)

type UpgradeSettings struct {
	BlueGreenSettings *BlueGreenSettings           `json:"blueGreenSettings,omitempty"`
	MaxSurge          *int32                       `json:"maxSurge,omitempty"`
	MaxUnavailable    *int32                       `json:"maxUnavailable,omitempty"`
	Strategy          *UpgradeSettingsStrategyEnum `json:"strategy,omitempty"`
}
