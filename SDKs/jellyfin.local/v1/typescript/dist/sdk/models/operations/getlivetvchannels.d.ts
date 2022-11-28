import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLiveTvChannelsQueryParams extends SpeakeasyBase {
    addCurrentProgram?: boolean;
    enableFavoriteSorting?: boolean;
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    isDisliked?: boolean;
    isFavorite?: boolean;
    isKids?: boolean;
    isLiked?: boolean;
    isMovie?: boolean;
    isNews?: boolean;
    isSeries?: boolean;
    isSports?: boolean;
    limit?: number;
    sortBy?: string[];
    sortOrder?: shared.SortOrderEnum;
    startIndex?: number;
    type?: shared.ChannelTypeEnum;
    userId?: string;
}
export declare class GetLiveTvChannelsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLiveTvChannelsRequest extends SpeakeasyBase {
    queryParams: GetLiveTvChannelsQueryParams;
    security: GetLiveTvChannelsSecurity;
}
export declare class GetLiveTvChannelsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
