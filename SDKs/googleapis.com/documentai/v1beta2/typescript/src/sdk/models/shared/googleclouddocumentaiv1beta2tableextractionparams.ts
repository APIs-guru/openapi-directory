import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2TableBoundHint } from "./googleclouddocumentaiv1beta2tableboundhint";



// GoogleCloudDocumentaiV1beta2TableExtractionParams
/** 
 * Parameters to control table extraction behavior.
**/
export class GoogleCloudDocumentaiV1beta2TableExtractionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headerHints" })
  headerHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=modelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=tableBoundHints", elemType: GoogleCloudDocumentaiV1beta2TableBoundHint })
  tableBoundHints?: GoogleCloudDocumentaiV1beta2TableBoundHint[];
}
