import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLiveTvChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addCurrentProgram" })
  addCurrentProgram?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableFavoriteSorting" })
  enableFavoriteSorting?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDisliked" })
  isDisliked?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLiked" })
  isLiked?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: shared.SortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetLiveTvChannelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLiveTvChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLiveTvChannelsQueryParams;

  @SpeakeasyMetadata()
  security: GetLiveTvChannelsSecurity;
}


export class GetLiveTvChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
