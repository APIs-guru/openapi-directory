import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class MovieLink extends SpeakeasyBase {
    suggestedLinkText?: string;
    type?: string;
    url?: string;
}
export declare class MovieMultimediaResource extends SpeakeasyBase {
    height?: number;
    src?: string;
    type?: string;
    width?: number;
}
export declare class MovieMultimedia extends SpeakeasyBase {
    resource?: MovieMultimediaResource;
}
export declare class Movie extends SpeakeasyBase {
    byline?: string;
    criticsPick?: number;
    dateUpdated?: string;
    displayTitle?: string;
    headline?: string;
    link?: MovieLink;
    mpaaRating?: string;
    multimedia?: MovieMultimedia;
    openingDate?: string;
    publicationDate?: string;
    summaryShort?: string;
}
