import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectConfig } from "./projectconfig";


// UpdateProjectConfigRequest
/** 
 * Request for UpdateProjectConfig.
**/
export class UpdateProjectConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectConfig" })
  projectConfig?: ProjectConfig;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
