import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaJsonQueryParams extends SpeakeasyBase {
    collectionId?: number;
    contentAuthoredBeforeDate?: Date;
    contentAuthoredInRange?: string;
    contentAuthoredSinceDate?: Date;
    contentPublishedBeforeDate?: Date;
    contentPublishedInRange?: string;
    contentPublishedSinceDate?: Date;
    contentReviewedBeforeDate?: Date;
    contentReviewedInRange?: string;
    contentReviewedSinceDate?: Date;
    contentUpdatedBeforeDate?: Date;
    contentUpdatedInRange?: string;
    contentUpdatedSinceDate?: Date;
    createdBy?: string;
    customThumbnailUrl?: string;
    customThumbnailUrlContains?: string;
    dateContentAuthored?: Date;
    dateContentPublished?: Date;
    dateContentReviewed?: Date;
    dateContentUpdated?: Date;
    dateSyndicationCaptured?: Date;
    dateSyndicationUpdated?: Date;
    descriptionContains?: string;
    hash?: string;
    hashContains?: string;
    languageId?: number;
    languageIsoCode?: string;
    languageName?: string;
    max?: number;
    mediaTypes?: string;
    name?: string;
    nameContains?: string;
    offset?: number;
    order?: string;
    restrictToSet?: string;
    sort?: string;
    sourceAcronym?: string;
    sourceAcronymContains?: string;
    sourceId?: number;
    sourceName?: string;
    sourceNameContains?: string;
    sourceUrl?: string;
    sourceUrlContains?: string;
    syndicationCapturedBeforeDate?: Date;
    syndicationCapturedInRange?: string;
    syndicationCapturedSinceDate?: Date;
    syndicationUpdatedBeforeDate?: Date;
    syndicationUpdatedInRange?: string;
    syndicationUpdatedSinceDate?: Date;
    syndicationVisibleBeforeDate?: Date;
    syndicationVisibleInRange?: Date;
    syndicationVisibleSinceDate?: Date;
    tagIds?: string;
}
export declare class GetResourcesMediaJsonRequest extends SpeakeasyBase {
    queryParams: GetResourcesMediaJsonQueryParams;
}
export declare class GetResourcesMediaJsonResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
