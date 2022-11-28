import { SpeakeasyBase } from "../../../internal/utils";
export declare class ArticleWithCountTypeMediaMediaMetadata extends SpeakeasyBase {
    format?: string;
    height?: number;
    url?: string;
    width?: number;
}
export declare class ArticleWithCountTypeMedia extends SpeakeasyBase {
    caption?: string;
    copyright?: string;
    mediaMetadata?: ArticleWithCountTypeMediaMediaMetadata;
    subtype?: string;
    type?: string;
}
export declare class ArticleWithCountType extends SpeakeasyBase {
    abstract?: string;
    byline?: string;
    column?: string;
    countType?: string;
    desFacet?: any;
    geoFacet?: any;
    media?: ArticleWithCountTypeMedia[];
    orgFacet?: any[];
    perFacet?: any[];
    publishedDate?: string;
    section?: string;
    source?: string;
    title?: string;
    url?: string;
}
