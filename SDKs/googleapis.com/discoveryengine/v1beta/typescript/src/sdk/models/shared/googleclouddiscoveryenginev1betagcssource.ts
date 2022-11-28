import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1betaGcsSource
/** 
 * Google Cloud Storage location for input content. format.
**/
export class GoogleCloudDiscoveryengineV1betaGcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=inputUris" })
  inputUris?: string[];
}
