import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PretargetingConfig } from "./pretargetingconfig";


// ListPretargetingConfigsResponse
/** 
 * A response containing pretargeting configurations.
**/
export class ListPretargetingConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pretargetingConfigs", elemType: shared.PretargetingConfig })
  pretargetingConfigs?: PretargetingConfig[];
}
