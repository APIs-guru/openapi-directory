import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Author of this review.
**/
export declare class ReviewAuthor extends SpeakeasyBase {
    displayName?: string;
}
/**
 * Information regarding the source of this review, when the review is not from a Google Books user.
**/
export declare class ReviewSource extends SpeakeasyBase {
    description?: string;
    extraDescription?: string;
    url?: string;
}
export declare class Review extends SpeakeasyBase {
    author?: ReviewAuthor;
    content?: string;
    date?: string;
    fullTextUrl?: string;
    kind?: string;
    rating?: string;
    source?: ReviewSource;
    title?: string;
    type?: string;
    volumeId?: string;
}
