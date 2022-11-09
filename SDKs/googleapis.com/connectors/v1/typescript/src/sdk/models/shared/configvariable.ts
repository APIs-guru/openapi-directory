import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Secret } from "./secret";


// ConfigVariable
/** 
 * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
**/
export class ConfigVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=secretValue" })
  secretValue?: Secret;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
