import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";



// ConfigVariable
/** 
 * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
**/
export class ConfigVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=secretValue" })
  secretValue?: Secret;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
