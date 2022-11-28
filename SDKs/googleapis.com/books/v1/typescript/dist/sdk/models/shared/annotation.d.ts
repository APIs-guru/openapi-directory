import { SpeakeasyBase } from "../../../internal/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";
/**
 * Selection ranges sent from the client.
**/
export declare class AnnotationClientVersionRanges extends SpeakeasyBase {
    cfiRange?: BooksAnnotationsRange;
    contentVersion?: string;
    gbImageRange?: BooksAnnotationsRange;
    gbTextRange?: BooksAnnotationsRange;
    imageCfiRange?: BooksAnnotationsRange;
}
/**
 * Selection ranges for the most recent content version.
**/
export declare class AnnotationCurrentVersionRanges extends SpeakeasyBase {
    cfiRange?: BooksAnnotationsRange;
    contentVersion?: string;
    gbImageRange?: BooksAnnotationsRange;
    gbTextRange?: BooksAnnotationsRange;
    imageCfiRange?: BooksAnnotationsRange;
}
export declare class AnnotationLayerSummary extends SpeakeasyBase {
    allowedCharacterCount?: number;
    limitType?: string;
    remainingCharacterCount?: number;
}
export declare class Annotation extends SpeakeasyBase {
    afterSelectedText?: string;
    beforeSelectedText?: string;
    clientVersionRanges?: AnnotationClientVersionRanges;
    created?: string;
    currentVersionRanges?: AnnotationCurrentVersionRanges;
    data?: string;
    deleted?: boolean;
    highlightStyle?: string;
    id?: string;
    kind?: string;
    layerId?: string;
    layerSummary?: AnnotationLayerSummary;
    pageIds?: string[];
    selectedText?: string;
    selfLink?: string;
    updated?: string;
    volumeId?: string;
}
