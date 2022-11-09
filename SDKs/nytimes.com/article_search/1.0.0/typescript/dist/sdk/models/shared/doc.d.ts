import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DocByline extends SpeakeasyBase {
    organization?: string;
    original?: string;
    person?: any[];
}
export declare class DocHeadline extends SpeakeasyBase {
    kicker?: string;
    main?: string;
}
export declare class DocKeywords extends SpeakeasyBase {
    name?: string;
    rank?: string;
    value?: string;
}
export declare class DocMultimedia extends SpeakeasyBase {
    caption?: string;
    copyright?: string;
    format?: string;
    height?: number;
    subtype?: string;
    type?: string;
    url?: string;
    width?: number;
}
export declare class Doc extends SpeakeasyBase {
    id?: string;
    abstract?: string;
    blog?: any[];
    byline?: DocByline;
    documentType?: string;
    headline?: DocHeadline;
    keywords?: DocKeywords;
    leadParagraph?: string;
    multimedia?: DocMultimedia[];
    newsDesk?: string;
    printPage?: string;
    pubDate?: string;
    sectionName?: string;
    slideshowCredits?: string;
    snippet?: string;
    source?: string;
    subsectionName?: string;
    typeOfMaterial?: string;
    webUrl?: string;
    wordCount?: string;
}
