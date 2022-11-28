import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfig } from "./runtimeconfig";



// ListConfigsResponse
/** 
 * `ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
**/
export class ListConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: RuntimeConfig })
  configs?: RuntimeConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
