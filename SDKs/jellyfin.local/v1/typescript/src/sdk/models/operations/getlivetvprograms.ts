import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLiveTvProgramsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=channelIds" })
  channelIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=genreIds" })
  genreIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=genres" })
  genres?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasAired" })
  hasAired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isAiring" })
  isAiring?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=librarySeriesId" })
  librarySeriesId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxEndDate" })
  maxEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxStartDate" })
  maxStartDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minEndDate" })
  minEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minStartDate" })
  minStartDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" })
  seriesTimerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetLiveTvProgramsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLiveTvProgramsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLiveTvProgramsQueryParams;

  @Metadata()
  security: GetLiveTvProgramsSecurity;
}


export class GetLiveTvProgramsResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
