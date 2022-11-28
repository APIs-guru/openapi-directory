import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaGcsSource
/** 
 * Google Cloud Storage location for input content.
**/
export class GoogleCloudRetailV2alphaGcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=inputUris" })
  inputUris?: string[];
}
