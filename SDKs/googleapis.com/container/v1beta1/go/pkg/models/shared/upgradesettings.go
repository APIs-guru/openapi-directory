package shared

type UpgradeSettingsStrategyEnum string

const (
	UpgradeSettingsStrategyEnumNodePoolUpdateStrategyUnspecified UpgradeSettingsStrategyEnum = "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
	UpgradeSettingsStrategyEnumBlueGreen                         UpgradeSettingsStrategyEnum = "BLUE_GREEN"
	UpgradeSettingsStrategyEnumSurge                             UpgradeSettingsStrategyEnum = "SURGE"
)

type UpgradeSettings struct {
	BlueGreenSettings *BlueGreenSettings           `json:"blueGreenSettings"`
	MaxSurge          *int32                       `json:"maxSurge"`
	MaxUnavailable    *int32                       `json:"maxUnavailable"`
	Strategy          *UpgradeSettingsStrategyEnum `json:"strategy"`
}
