import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2KeyValuePairHint } from "./googleclouddocumentaiv1beta2keyvaluepairhint";



// GoogleCloudDocumentaiV1beta2FormExtractionParams
/** 
 * Parameters to control form extraction behavior.
**/
export class GoogleCloudDocumentaiV1beta2FormExtractionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyValuePairHints", elemType: GoogleCloudDocumentaiV1beta2KeyValuePairHint })
  keyValuePairHints?: GoogleCloudDocumentaiV1beta2KeyValuePairHint[];

  @SpeakeasyMetadata({ data: "json, name=modelVersion" })
  modelVersion?: string;
}
