import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime
/** 
 * Software Runtime Configuration to run Analyze.
**/
export class GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageVersion" })
  imageVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=javaLibraries" })
  javaLibraries?: string[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pythonPackages" })
  pythonPackages?: string[];
}
