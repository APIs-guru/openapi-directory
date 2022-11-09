import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuntimeConfig } from "./runtimeconfig";


// ListConfigsResponse
/** 
 * `ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
**/
export class ListConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.RuntimeConfig })
  configs?: RuntimeConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
