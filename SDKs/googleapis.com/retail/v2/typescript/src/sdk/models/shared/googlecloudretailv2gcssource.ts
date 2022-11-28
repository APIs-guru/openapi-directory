import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2GcsSource
/** 
 * Google Cloud Storage location for input content.
**/
export class GoogleCloudRetailV2GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=inputUris" })
  inputUris?: string[];
}
