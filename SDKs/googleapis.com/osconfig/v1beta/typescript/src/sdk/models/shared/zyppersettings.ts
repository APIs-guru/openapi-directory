import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZypperSettings
/** 
 * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
**/
export class ZypperSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: string[];

  @SpeakeasyMetadata({ data: "json, name=exclusivePatches" })
  exclusivePatches?: string[];

  @SpeakeasyMetadata({ data: "json, name=severities" })
  severities?: string[];

  @SpeakeasyMetadata({ data: "json, name=withOptional" })
  withOptional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=withUpdate" })
  withUpdate?: boolean;
}
