import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PersistenceConfigPersistenceModeEnum {
    PersistenceModeUnspecified = "PERSISTENCE_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Rdb = "RDB"
}

export enum PersistenceConfigRdbSnapshotPeriodEnum {
    SnapshotPeriodUnspecified = "SNAPSHOT_PERIOD_UNSPECIFIED",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS",
    TwelveHours = "TWELVE_HOURS",
    TwentyFourHours = "TWENTY_FOUR_HOURS"
}


// PersistenceConfigInput
/** 
 * Configuration of the persistence functionality.
**/
export class PersistenceConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=persistenceMode" })
  persistenceMode?: PersistenceConfigPersistenceModeEnum;

  @SpeakeasyMetadata({ data: "json, name=rdbSnapshotPeriod" })
  rdbSnapshotPeriod?: PersistenceConfigRdbSnapshotPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=rdbSnapshotStartTime" })
  rdbSnapshotStartTime?: string;
}


// PersistenceConfig
/** 
 * Configuration of the persistence functionality.
**/
export class PersistenceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=persistenceMode" })
  persistenceMode?: PersistenceConfigPersistenceModeEnum;

  @SpeakeasyMetadata({ data: "json, name=rdbNextSnapshotTime" })
  rdbNextSnapshotTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rdbSnapshotPeriod" })
  rdbSnapshotPeriod?: PersistenceConfigRdbSnapshotPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=rdbSnapshotStartTime" })
  rdbSnapshotStartTime?: string;
}
