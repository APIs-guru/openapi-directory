import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZypperSettings
/** 
 * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
**/
export class ZypperSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=excludes" })
  excludes?: string[];

  @Metadata({ data: "json, name=exclusivePatches" })
  exclusivePatches?: string[];

  @Metadata({ data: "json, name=severities" })
  severities?: string[];

  @Metadata({ data: "json, name=withOptional" })
  withOptional?: boolean;

  @Metadata({ data: "json, name=withUpdate" })
  withUpdate?: boolean;
}
