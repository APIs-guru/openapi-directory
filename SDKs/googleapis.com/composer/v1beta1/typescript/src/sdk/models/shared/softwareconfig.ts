import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareConfig
/** 
 * Specifies the selection and configuration of software inside the environment.
**/
export class SoftwareConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=airflowConfigOverrides" })
  airflowConfigOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=envVariables" })
  envVariables?: Map<string, string>;

  @Metadata({ data: "json, name=imageVersion" })
  imageVersion?: string;

  @Metadata({ data: "json, name=pypiPackages" })
  pypiPackages?: Map<string, string>;

  @Metadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @Metadata({ data: "json, name=schedulerCount" })
  schedulerCount?: number;
}
