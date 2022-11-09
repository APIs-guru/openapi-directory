import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2EntityExtractionParams
/** 
 * Parameters to control entity extraction behavior.
**/
export class GoogleCloudDocumentaiV1beta2EntityExtractionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=modelVersion" })
  modelVersion?: string;
}
