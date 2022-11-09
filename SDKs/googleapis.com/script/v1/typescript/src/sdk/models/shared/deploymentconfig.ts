import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentConfig
/** 
 * Metadata the defines how a deployment is configured.
**/
export class DeploymentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=manifestFileName" })
  manifestFileName?: string;

  @Metadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
