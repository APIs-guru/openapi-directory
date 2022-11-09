import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AptSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Dist = "DIST"
,    Upgrade = "UPGRADE"
}


// AptSettings
/** 
 * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
**/
export class AptSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludes" })
  excludes?: string[];

  @Metadata({ data: "json, name=exclusivePackages" })
  exclusivePackages?: string[];

  @Metadata({ data: "json, name=type" })
  type?: AptSettingsTypeEnum;
}
