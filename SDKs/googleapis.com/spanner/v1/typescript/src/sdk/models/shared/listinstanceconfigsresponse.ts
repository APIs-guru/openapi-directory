import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceConfig } from "./instanceconfig";


// ListInstanceConfigsResponse
/** 
 * The response for ListInstanceConfigs.
**/
export class ListInstanceConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceConfigs", elemType: shared.InstanceConfig })
  instanceConfigs?: InstanceConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
