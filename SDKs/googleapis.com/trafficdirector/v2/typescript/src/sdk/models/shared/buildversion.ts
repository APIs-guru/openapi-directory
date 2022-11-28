import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SemanticVersion } from "./semanticversion";



// BuildVersion
/** 
 * BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
**/
export class BuildVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: SemanticVersion;
}
