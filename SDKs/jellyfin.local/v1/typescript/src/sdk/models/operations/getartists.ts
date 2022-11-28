import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetArtistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" })
  excludeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: shared.ItemFilterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" })
  genreIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" })
  mediaTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCommunityRating" })
  minCommunityRating?: number;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=person" })
  person?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personIds" })
  personIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personTypes" })
  personTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=years" })
  years?: number[];
}


export class GetArtistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetArtistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetArtistsQueryParams;

  @SpeakeasyMetadata()
  security: GetArtistsSecurity;
}


export class GetArtistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
