import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeConfig
/** 
 * Runtime configuration for a workload.
**/
export class RuntimeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
