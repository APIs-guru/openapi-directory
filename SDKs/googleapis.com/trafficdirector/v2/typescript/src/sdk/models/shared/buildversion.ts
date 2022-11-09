import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SemanticVersion } from "./semanticversion";


// BuildVersion
/** 
 * BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
**/
export class BuildVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=version" })
  version?: SemanticVersion;
}
