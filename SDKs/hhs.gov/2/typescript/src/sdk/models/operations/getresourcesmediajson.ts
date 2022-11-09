import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesMediaJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=collectionId" })
  collectionId?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredBeforeDate" })
  contentAuthoredBeforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredInRange" })
  contentAuthoredInRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredSinceDate" })
  contentAuthoredSinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentPublishedBeforeDate" })
  contentPublishedBeforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentPublishedInRange" })
  contentPublishedInRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentPublishedSinceDate" })
  contentPublishedSinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentReviewedBeforeDate" })
  contentReviewedBeforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentReviewedInRange" })
  contentReviewedInRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentReviewedSinceDate" })
  contentReviewedSinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedBeforeDate" })
  contentUpdatedBeforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedInRange" })
  contentUpdatedInRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedSinceDate" })
  contentUpdatedSinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=customThumbnailUrl" })
  customThumbnailUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=customThumbnailUrlContains" })
  customThumbnailUrlContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=dateContentAuthored" })
  dateContentAuthored?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=dateContentPublished" })
  dateContentPublished?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=dateContentReviewed" })
  dateContentReviewed?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=dateContentUpdated" })
  dateContentUpdated?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=dateSyndicationCaptured" })
  dateSyndicationCaptured?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=dateSyndicationUpdated" })
  dateSyndicationUpdated?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=descriptionContains" })
  descriptionContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=hash" })
  hash?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=hashContains" })
  hashContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=languageId" })
  languageId?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=languageIsoCode" })
  languageIsoCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=languageName" })
  languageName?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=mediaTypes" })
  mediaTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=nameContains" })
  nameContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=order" })
  order?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=restrictToSet" })
  restrictToSet?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sourceAcronym" })
  sourceAcronym?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sourceAcronymContains" })
  sourceAcronymContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sourceId" })
  sourceId?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sourceName" })
  sourceName?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sourceNameContains" })
  sourceNameContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sourceUrlContains" })
  sourceUrlContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedBeforeDate" })
  syndicationCapturedBeforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedInRange" })
  syndicationCapturedInRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedSinceDate" })
  syndicationCapturedSinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedBeforeDate" })
  syndicationUpdatedBeforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedInRange" })
  syndicationUpdatedInRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedSinceDate" })
  syndicationUpdatedSinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleBeforeDate" })
  syndicationVisibleBeforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleInRange" })
  syndicationVisibleInRange?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleSinceDate" })
  syndicationVisibleSinceDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string;
}


export class GetResourcesMediaJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesMediaJsonQueryParams;
}


export class GetResourcesMediaJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @Metadata()
  statusCode: number;
}
