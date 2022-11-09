import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PersistenceConfigPersistenceModeEnum {
    PersistenceModeUnspecified = "PERSISTENCE_MODE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Rdb = "RDB"
}

export enum PersistenceConfigRdbSnapshotPeriodEnum {
    SnapshotPeriodUnspecified = "SNAPSHOT_PERIOD_UNSPECIFIED"
,    OneHour = "ONE_HOUR"
,    SixHours = "SIX_HOURS"
,    TwelveHours = "TWELVE_HOURS"
,    TwentyFourHours = "TWENTY_FOUR_HOURS"
}


// PersistenceConfig
/** 
 * Configuration of the persistence functionality.
**/
export class PersistenceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=persistenceMode" })
  persistenceMode?: PersistenceConfigPersistenceModeEnum;

  @Metadata({ data: "json, name=rdbNextSnapshotTime" })
  rdbNextSnapshotTime?: string;

  @Metadata({ data: "json, name=rdbSnapshotPeriod" })
  rdbSnapshotPeriod?: PersistenceConfigRdbSnapshotPeriodEnum;

  @Metadata({ data: "json, name=rdbSnapshotStartTime" })
  rdbSnapshotStartTime?: string;
}
