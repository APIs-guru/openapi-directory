import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AptSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Dist = "DIST",
    Upgrade = "UPGRADE"
}


// AptSettings
/** 
 * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
**/
export class AptSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: string[];

  @SpeakeasyMetadata({ data: "json, name=exclusivePackages" })
  exclusivePackages?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AptSettingsTypeEnum;
}
