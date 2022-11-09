import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLiveTvChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addCurrentProgram" })
  addCurrentProgram?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableFavoriteSorting" })
  enableFavoriteSorting?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isDisliked" })
  isDisliked?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isLiked" })
  isLiked?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: shared.SortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.ChannelTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetLiveTvChannelsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLiveTvChannelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLiveTvChannelsQueryParams;

  @Metadata()
  security: GetLiveTvChannelsSecurity;
}


export class GetLiveTvChannelsResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
