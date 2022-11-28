import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuntimeConfig
/** 
 * Runtime configuration for a workload.
**/
export class RuntimeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
