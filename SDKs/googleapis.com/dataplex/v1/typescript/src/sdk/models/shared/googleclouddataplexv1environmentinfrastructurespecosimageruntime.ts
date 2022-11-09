import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime
/** 
 * Software Runtime Configuration to run Analyze.
**/
export class GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageVersion" })
  imageVersion?: string;

  @Metadata({ data: "json, name=javaLibraries" })
  javaLibraries?: string[];

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=pythonPackages" })
  pythonPackages?: string[];
}
