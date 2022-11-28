import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Image belonging to a custom search result.
**/
export declare class ResultImage extends SpeakeasyBase {
    byteSize?: number;
    contextLink?: string;
    height?: number;
    thumbnailHeight?: number;
    thumbnailLink?: string;
    thumbnailWidth?: number;
    width?: number;
}
/**
 * Refinement label associated with a custom search result.
**/
export declare class ResultLabels extends SpeakeasyBase {
    displayName?: string;
    labelWithOp?: string;
    name?: string;
}
/**
 * A custom search result.
**/
export declare class Result extends SpeakeasyBase {
    cacheId?: string;
    displayLink?: string;
    fileFormat?: string;
    formattedUrl?: string;
    htmlFormattedUrl?: string;
    htmlSnippet?: string;
    htmlTitle?: string;
    image?: ResultImage;
    kind?: string;
    labels?: ResultLabels[];
    link?: string;
    mime?: string;
    pagemap?: Map<string, any>;
    snippet?: string;
    title?: string;
}
