import { SpeakeasyBase } from "../../../internal/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";
/**
 * The content ranges to identify the selected text.
**/
export declare class VolumeannotationContentRanges extends SpeakeasyBase {
    cfiRange?: BooksAnnotationsRange;
    contentVersion?: string;
    gbImageRange?: BooksAnnotationsRange;
    gbTextRange?: BooksAnnotationsRange;
}
export declare class Volumeannotation extends SpeakeasyBase {
    annotationDataId?: string;
    annotationDataLink?: string;
    annotationType?: string;
    contentRanges?: VolumeannotationContentRanges;
    data?: string;
    deleted?: boolean;
    id?: string;
    kind?: string;
    layerId?: string;
    pageIds?: string[];
    selectedText?: string;
    selfLink?: string;
    updated?: string;
    volumeId?: string;
}
