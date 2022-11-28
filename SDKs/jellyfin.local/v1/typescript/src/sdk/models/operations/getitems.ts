import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adjacentTo" })
  adjacentTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumArtistIds" })
  albumArtistIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumIds" })
  albumIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albums" })
  albums?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistIds" })
  artistIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collapseBoxSetItems" })
  collapseBoxSetItems?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributingArtistIds" })
  contributingArtistIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" })
  excludeArtistIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemIds" })
  excludeItemIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" })
  excludeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeLocationTypes" })
  excludeLocationTypes?: shared.LocationTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: shared.ItemFilterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" })
  genreIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasImdbId" })
  hasImdbId?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasOfficialRating" })
  hasOfficialRating?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasOverview" })
  hasOverview?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasParentalRating" })
  hasParentalRating?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasSpecialFeature" })
  hasSpecialFeature?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasSubtitles" })
  hasSubtitles?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasThemeSong" })
  hasThemeSong?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasThemeVideo" })
  hasThemeVideo?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTmdbId" })
  hasTmdbId?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTrailer" })
  hasTrailer?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTvdbId" })
  hasTvdbId?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypes" })
  imageTypes?: shared.ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is3D" })
  is3D?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is4K" })
  is4K?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isHd" })
  isHd?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMissing" })
  isMissing?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPlaceHolder" })
  isPlaceHolder?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPlayed" })
  isPlayed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isUnaired" })
  isUnaired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationTypes" })
  locationTypes?: shared.LocationTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHeight" })
  maxHeight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxOfficialRating" })
  maxOfficialRating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPremiereDate" })
  maxPremiereDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWidth" })
  maxWidth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" })
  mediaTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCommunityRating" })
  minCommunityRating?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCriticRating" })
  minCriticRating?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDateLastSaved" })
  minDateLastSaved?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDateLastSavedForUser" })
  minDateLastSavedForUser?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minHeight" })
  minHeight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minOfficialRating" })
  minOfficialRating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minPremiereDate" })
  minPremiereDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minWidth" })
  minWidth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameLessThan" })
  nameLessThan?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWith" })
  nameStartsWith?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWithOrGreater" })
  nameStartsWithOrGreater?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=officialRatings" })
  officialRatings?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentIndexNumber" })
  parentIndexNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=person" })
  person?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personIds" })
  personIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personTypes" })
  personTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesStatus" })
  seriesStatus?: shared.SeriesStatusEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studioIds" })
  studioIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studios" })
  studios?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoTypes" })
  videoTypes?: shared.VideoTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=years" })
  years?: number[];
}


export class GetItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetItemsSecurity;
}


export class GetItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
