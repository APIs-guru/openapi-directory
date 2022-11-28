import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaGcsSource
/** 
 * Google Cloud Storage location for input content.
**/
export class GoogleCloudRetailV2betaGcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=inputUris" })
  inputUris?: string[];
}
