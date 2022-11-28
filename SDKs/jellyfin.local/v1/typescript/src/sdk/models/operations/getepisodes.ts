import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEpisodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=seriesId" })
  seriesId: string;
}


export class GetEpisodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adjacentTo" })
  adjacentTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMissing" })
  isMissing?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonId" })
  seasonId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startItemId" })
  startItemId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetEpisodesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetEpisodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEpisodesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEpisodesQueryParams;

  @SpeakeasyMetadata()
  security: GetEpisodesSecurity;
}


export class GetEpisodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
