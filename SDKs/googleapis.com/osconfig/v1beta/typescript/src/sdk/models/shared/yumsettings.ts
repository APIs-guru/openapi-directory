import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// YumSettings
/** 
 * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
**/
export class YumSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: string[];

  @SpeakeasyMetadata({ data: "json, name=exclusivePackages" })
  exclusivePackages?: string[];

  @SpeakeasyMetadata({ data: "json, name=minimal" })
  minimal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=security" })
  security?: boolean;
}
