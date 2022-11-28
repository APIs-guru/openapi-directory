package shared

type PersistenceConfigPersistenceModeEnum string

const (
	PersistenceConfigPersistenceModeEnumPersistenceModeUnspecified PersistenceConfigPersistenceModeEnum = "PERSISTENCE_MODE_UNSPECIFIED"
	PersistenceConfigPersistenceModeEnumDisabled                   PersistenceConfigPersistenceModeEnum = "DISABLED"
	PersistenceConfigPersistenceModeEnumRdb                        PersistenceConfigPersistenceModeEnum = "RDB"
)

type PersistenceConfigRdbSnapshotPeriodEnum string

const (
	PersistenceConfigRdbSnapshotPeriodEnumSnapshotPeriodUnspecified PersistenceConfigRdbSnapshotPeriodEnum = "SNAPSHOT_PERIOD_UNSPECIFIED"
	PersistenceConfigRdbSnapshotPeriodEnumOneHour                   PersistenceConfigRdbSnapshotPeriodEnum = "ONE_HOUR"
	PersistenceConfigRdbSnapshotPeriodEnumSixHours                  PersistenceConfigRdbSnapshotPeriodEnum = "SIX_HOURS"
	PersistenceConfigRdbSnapshotPeriodEnumTwelveHours               PersistenceConfigRdbSnapshotPeriodEnum = "TWELVE_HOURS"
	PersistenceConfigRdbSnapshotPeriodEnumTwentyFourHours           PersistenceConfigRdbSnapshotPeriodEnum = "TWENTY_FOUR_HOURS"
)

// PersistenceConfig
// Configuration of the persistence functionality.
type PersistenceConfig struct {
	PersistenceMode      *PersistenceConfigPersistenceModeEnum   `json:"persistenceMode,omitempty"`
	RdbNextSnapshotTime  *string                                 `json:"rdbNextSnapshotTime,omitempty"`
	RdbSnapshotPeriod    *PersistenceConfigRdbSnapshotPeriodEnum `json:"rdbSnapshotPeriod,omitempty"`
	RdbSnapshotStartTime *string                                 `json:"rdbSnapshotStartTime,omitempty"`
}

// PersistenceConfigInput
// Configuration of the persistence functionality.
type PersistenceConfigInput struct {
	PersistenceMode      *PersistenceConfigPersistenceModeEnum   `json:"persistenceMode,omitempty"`
	RdbSnapshotPeriod    *PersistenceConfigRdbSnapshotPeriodEnum `json:"rdbSnapshotPeriod,omitempty"`
	RdbSnapshotStartTime *string                                 `json:"rdbSnapshotStartTime,omitempty"`
}
