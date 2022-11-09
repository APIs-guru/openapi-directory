import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ArticleMultimedia extends SpeakeasyBase {
    caption?: string;
    copyright?: string;
    format?: string;
    height?: number;
    subtype?: string;
    type?: string;
    url?: string;
    width?: number;
}
export declare class ArticleRelatedUrls extends SpeakeasyBase {
    suggestedLinkText?: string;
    url?: string;
}
export declare class Article extends SpeakeasyBase {
    abstract?: string;
    byline?: string;
    createdDate?: string;
    desFacet?: string[];
    geoFacet?: string[];
    itemType?: string;
    kicker?: string;
    materialTypeFacet?: string;
    multimedia?: ArticleMultimedia[];
    orgFacet?: string[];
    perFacet?: string[];
    publishedDate?: string;
    relatedUrls?: ArticleRelatedUrls[];
    section?: string;
    shortUrl?: string;
    subsection?: string;
    thumbnailStandard?: string;
    title?: string;
    updatedDate?: string;
    url?: string;
}
