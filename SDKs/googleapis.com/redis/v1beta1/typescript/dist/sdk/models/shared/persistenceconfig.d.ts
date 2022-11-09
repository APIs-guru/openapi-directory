import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PersistenceConfigPersistenceModeEnum {
    PersistenceModeUnspecified = "PERSISTENCE_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Rdb = "RDB"
}
export declare enum PersistenceConfigRdbSnapshotPeriodEnum {
    SnapshotPeriodUnspecified = "SNAPSHOT_PERIOD_UNSPECIFIED",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS",
    TwelveHours = "TWELVE_HOURS",
    TwentyFourHours = "TWENTY_FOUR_HOURS"
}
/**
 * Configuration of the persistence functionality.
**/
export declare class PersistenceConfig extends SpeakeasyBase {
    persistenceMode?: PersistenceConfigPersistenceModeEnum;
    rdbNextSnapshotTime?: string;
    rdbSnapshotPeriod?: PersistenceConfigRdbSnapshotPeriodEnum;
    rdbSnapshotStartTime?: string;
}
