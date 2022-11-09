import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2TableBoundHint } from "./googleclouddocumentaiv1beta2tableboundhint";


// GoogleCloudDocumentaiV1beta2TableExtractionParams
/** 
 * Parameters to control table extraction behavior.
**/
export class GoogleCloudDocumentaiV1beta2TableExtractionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=headerHints" })
  headerHints?: string[];

  @Metadata({ data: "json, name=modelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=tableBoundHints", elemType: shared.GoogleCloudDocumentaiV1beta2TableBoundHint })
  tableBoundHints?: GoogleCloudDocumentaiV1beta2TableBoundHint[];
}
