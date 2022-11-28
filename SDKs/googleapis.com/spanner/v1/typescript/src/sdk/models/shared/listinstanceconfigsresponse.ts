import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";



// ListInstanceConfigsResponse
/** 
 * The response for ListInstanceConfigs.
**/
export class ListInstanceConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceConfigs", elemType: InstanceConfig })
  instanceConfigs?: InstanceConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
