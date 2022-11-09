import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrailersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=adjacentTo" })
  adjacentTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=albumArtistIds" })
  albumArtistIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=albumIds" })
  albumIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=albums" })
  albums?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistIds" })
  artistIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=collapseBoxSetItems" })
  collapseBoxSetItems?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributingArtistIds" })
  contributingArtistIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" })
  excludeArtistIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeItemIds" })
  excludeItemIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" })
  excludeItemTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeLocationTypes" })
  excludeLocationTypes?: shared.LocationTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: shared.ItemFilterEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=genreIds" })
  genreIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=genres" })
  genres?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasImdbId" })
  hasImdbId?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasOfficialRating" })
  hasOfficialRating?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasOverview" })
  hasOverview?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasParentalRating" })
  hasParentalRating?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasSpecialFeature" })
  hasSpecialFeature?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasSubtitles" })
  hasSubtitles?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasThemeSong" })
  hasThemeSong?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasThemeVideo" })
  hasThemeVideo?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasTmdbId" })
  hasTmdbId?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasTrailer" })
  hasTrailer?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasTvdbId" })
  hasTvdbId?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageTypes" })
  imageTypes?: shared.ImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is3D" })
  is3D?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is4K" })
  is4K?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isHd" })
  isHd?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isLocked" })
  isLocked?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMissing" })
  isMissing?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isPlaceHolder" })
  isPlaceHolder?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isPlayed" })
  isPlayed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isUnaired" })
  isUnaired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationTypes" })
  locationTypes?: shared.LocationTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxHeight" })
  maxHeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxOfficialRating" })
  maxOfficialRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxPremiereDate" })
  maxPremiereDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxWidth" })
  maxWidth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" })
  mediaTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=minCommunityRating" })
  minCommunityRating?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minCriticRating" })
  minCriticRating?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDateLastSaved" })
  minDateLastSaved?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDateLastSavedForUser" })
  minDateLastSavedForUser?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minHeight" })
  minHeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minOfficialRating" })
  minOfficialRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minPremiereDate" })
  minPremiereDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minWidth" })
  minWidth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameLessThan" })
  nameLessThan?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameStartsWith" })
  nameStartsWith?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameStartsWithOrGreater" })
  nameStartsWithOrGreater?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=officialRatings" })
  officialRatings?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentIndexNumber" })
  parentIndexNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=person" })
  person?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=personIds" })
  personIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=personTypes" })
  personTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seriesStatus" })
  seriesStatus?: shared.SeriesStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=studioIds" })
  studioIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=studios" })
  studios?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoTypes" })
  videoTypes?: shared.VideoTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=years" })
  years?: number[];
}


export class GetTrailersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTrailersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTrailersQueryParams;

  @Metadata()
  security: GetTrailersSecurity;
}


export class GetTrailersResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
