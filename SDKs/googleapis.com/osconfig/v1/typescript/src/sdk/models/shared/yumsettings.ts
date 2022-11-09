import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// YumSettings
/** 
 * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
**/
export class YumSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludes" })
  excludes?: string[];

  @Metadata({ data: "json, name=exclusivePackages" })
  exclusivePackages?: string[];

  @Metadata({ data: "json, name=minimal" })
  minimal?: boolean;

  @Metadata({ data: "json, name=security" })
  security?: boolean;
}
