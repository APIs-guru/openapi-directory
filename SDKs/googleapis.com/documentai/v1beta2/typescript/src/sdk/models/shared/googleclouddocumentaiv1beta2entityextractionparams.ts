import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2EntityExtractionParams
/** 
 * Parameters to control entity extraction behavior.
**/
export class GoogleCloudDocumentaiV1beta2EntityExtractionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modelVersion" })
  modelVersion?: string;
}
