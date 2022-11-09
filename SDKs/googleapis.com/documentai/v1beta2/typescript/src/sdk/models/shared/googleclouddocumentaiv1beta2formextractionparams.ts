import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2KeyValuePairHint } from "./googleclouddocumentaiv1beta2keyvaluepairhint";


// GoogleCloudDocumentaiV1beta2FormExtractionParams
/** 
 * Parameters to control form extraction behavior.
**/
export class GoogleCloudDocumentaiV1beta2FormExtractionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=keyValuePairHints", elemType: shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint })
  keyValuePairHints?: GoogleCloudDocumentaiV1beta2KeyValuePairHint[];

  @Metadata({ data: "json, name=modelVersion" })
  modelVersion?: string;
}
