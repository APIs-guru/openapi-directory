import { SpeakeasyBase } from "../../../internal/utils";
export declare class AnnotationsSummaryLayers extends SpeakeasyBase {
    allowedCharacterCount?: number;
    layerId?: string;
    limitType?: string;
    remainingCharacterCount?: number;
    updated?: string;
}
export declare class AnnotationsSummary extends SpeakeasyBase {
    kind?: string;
    layers?: AnnotationsSummaryLayers[];
}
