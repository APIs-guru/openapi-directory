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

type PersistenceConfig struct {
	PersistenceMode      *PersistenceConfigPersistenceModeEnum   `json:"persistenceMode"`
	RdbNextSnapshotTime  *string                                 `json:"rdbNextSnapshotTime"`
	RdbSnapshotPeriod    *PersistenceConfigRdbSnapshotPeriodEnum `json:"rdbSnapshotPeriod"`
	RdbSnapshotStartTime *string                                 `json:"rdbSnapshotStartTime"`
}
