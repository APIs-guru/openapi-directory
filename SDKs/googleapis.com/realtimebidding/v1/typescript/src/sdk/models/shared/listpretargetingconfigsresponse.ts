import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PretargetingConfig } from "./pretargetingconfig";



// ListPretargetingConfigsResponse
/** 
 * A response containing pretargeting configurations.
**/
export class ListPretargetingConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pretargetingConfigs", elemType: PretargetingConfig })
  pretargetingConfigs?: PretargetingConfig[];
}
