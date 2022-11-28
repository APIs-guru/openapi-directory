import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2TableBoundHint } from "./googleclouddocumentaiv1beta2tableboundhint";
/**
 * Parameters to control table extraction behavior.
**/
export declare class GoogleCloudDocumentaiV1beta2TableExtractionParams extends SpeakeasyBase {
    enabled?: boolean;
    headerHints?: string[];
    modelVersion?: string;
    tableBoundHints?: GoogleCloudDocumentaiV1beta2TableBoundHint[];
}
