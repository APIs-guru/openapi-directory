import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
**/
export declare class TextDetectionParams extends SpeakeasyBase {
    advancedOcrOptions?: string[];
    enableTextDetectionConfidenceScore?: boolean;
}
