import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLiveTvProgramsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelIds" })
  channelIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" })
  genreIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasAired" })
  hasAired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAiring" })
  isAiring?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=librarySeriesId" })
  librarySeriesId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxEndDate" })
  maxEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStartDate" })
  maxStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minEndDate" })
  minEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minStartDate" })
  minStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" })
  seriesTimerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetLiveTvProgramsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLiveTvProgramsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLiveTvProgramsQueryParams;

  @SpeakeasyMetadata()
  security: GetLiveTvProgramsSecurity;
}


export class GetLiveTvProgramsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
