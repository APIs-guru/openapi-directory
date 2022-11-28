import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2KeyValuePairHint } from "./googleclouddocumentaiv1beta2keyvaluepairhint";
/**
 * Parameters to control form extraction behavior.
**/
export declare class GoogleCloudDocumentaiV1beta2FormExtractionParams extends SpeakeasyBase {
    enabled?: boolean;
    keyValuePairHints?: GoogleCloudDocumentaiV1beta2KeyValuePairHint[];
    modelVersion?: string;
}
