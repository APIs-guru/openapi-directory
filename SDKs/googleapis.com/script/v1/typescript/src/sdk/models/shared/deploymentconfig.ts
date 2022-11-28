import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentConfig
/** 
 * Metadata the defines how a deployment is configured.
**/
export class DeploymentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=manifestFileName" })
  manifestFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
