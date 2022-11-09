import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UptimeCheckConfig } from "./uptimecheckconfig";


// ListUptimeCheckConfigsResponse
/** 
 * The protocol for the ListUptimeCheckConfigs response.
**/
export class ListUptimeCheckConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @Metadata({ data: "json, name=uptimeCheckConfigs", elemType: shared.UptimeCheckConfig })
  uptimeCheckConfigs?: UptimeCheckConfig[];
}
