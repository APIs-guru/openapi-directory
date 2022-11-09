import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaGcsSource
/** 
 * Google Cloud Storage location for input content.
**/
export class GoogleCloudRetailV2betaGcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @Metadata({ data: "json, name=inputUris" })
  inputUris?: string[];
}
