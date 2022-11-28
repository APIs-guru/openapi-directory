import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesMediaJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collectionId" })
  collectionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredBeforeDate" })
  contentAuthoredBeforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredInRange" })
  contentAuthoredInRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredSinceDate" })
  contentAuthoredSinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentPublishedBeforeDate" })
  contentPublishedBeforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentPublishedInRange" })
  contentPublishedInRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentPublishedSinceDate" })
  contentPublishedSinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentReviewedBeforeDate" })
  contentReviewedBeforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentReviewedInRange" })
  contentReviewedInRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentReviewedSinceDate" })
  contentReviewedSinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedBeforeDate" })
  contentUpdatedBeforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedInRange" })
  contentUpdatedInRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedSinceDate" })
  contentUpdatedSinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=customThumbnailUrl" })
  customThumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=customThumbnailUrlContains" })
  customThumbnailUrlContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentAuthored" })
  dateContentAuthored?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentPublished" })
  dateContentPublished?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentReviewed" })
  dateContentReviewed?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentUpdated" })
  dateContentUpdated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateSyndicationCaptured" })
  dateSyndicationCaptured?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateSyndicationUpdated" })
  dateSyndicationUpdated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=descriptionContains" })
  descriptionContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=hashContains" })
  hashContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageId" })
  languageId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageIsoCode" })
  languageIsoCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageName" })
  languageName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=mediaTypes" })
  mediaTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=nameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=order" })
  order?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=restrictToSet" })
  restrictToSet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceAcronym" })
  sourceAcronym?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceAcronymContains" })
  sourceAcronymContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceId" })
  sourceId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceName" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceNameContains" })
  sourceNameContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceUrlContains" })
  sourceUrlContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedBeforeDate" })
  syndicationCapturedBeforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedInRange" })
  syndicationCapturedInRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedSinceDate" })
  syndicationCapturedSinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedBeforeDate" })
  syndicationUpdatedBeforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedInRange" })
  syndicationUpdatedInRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedSinceDate" })
  syndicationUpdatedSinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleBeforeDate" })
  syndicationVisibleBeforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleInRange" })
  syndicationVisibleInRange?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleSinceDate" })
  syndicationVisibleSinceDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string;
}


export class GetResourcesMediaJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourcesMediaJsonQueryParams;
}


export class GetResourcesMediaJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
