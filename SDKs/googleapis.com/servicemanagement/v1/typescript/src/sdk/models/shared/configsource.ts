import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigFile } from "./configfile";


// ConfigSource
/** 
 * Represents a source file which is used to generate the service configuration defined by `google.api.Service`.
**/
export class ConfigSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.ConfigFile })
  files?: ConfigFile[];

  @Metadata({ data: "json, name=id" })
  id?: string;
}
