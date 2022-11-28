import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectConfig } from "./projectconfig";



// UpdateProjectConfigRequest
/** 
 * Request for UpdateProjectConfig.
**/
export class UpdateProjectConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectConfig" })
  projectConfig?: ProjectConfig;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
