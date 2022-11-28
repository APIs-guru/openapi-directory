import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectConfig } from "./projectconfig";
/**
 * Request for UpdateProjectConfig.
**/
export declare class UpdateProjectConfigRequest extends SpeakeasyBase {
    projectConfig?: ProjectConfig;
    updateMask?: string;
}
