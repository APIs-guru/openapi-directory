import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigFile } from "./configfile";



// ConfigSource
/** 
 * Represents a source file which is used to generate the service configuration defined by `google.api.Service`.
**/
export class ConfigSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: ConfigFile })
  files?: ConfigFile[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
