import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudDataLineageIntegration } from "./clouddatalineageintegration";



// SoftwareConfig
/** 
 * Specifies the selection and configuration of software inside the environment.
**/
export class SoftwareConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airflowConfigOverrides" })
  airflowConfigOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=cloudDataLineageIntegration" })
  cloudDataLineageIntegration?: CloudDataLineageIntegration;

  @SpeakeasyMetadata({ data: "json, name=envVariables" })
  envVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=imageVersion" })
  imageVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=pypiPackages" })
  pypiPackages?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulerCount" })
  schedulerCount?: number;
}
