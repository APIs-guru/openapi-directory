import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelsQueryParams extends SpeakeasyBase {
    isFavorite?: boolean;
    limit?: number;
    startIndex?: number;
    supportsLatestItems?: boolean;
    supportsMediaDeletion?: boolean;
    userId?: string;
}
export declare class GetChannelsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetChannelsRequest extends SpeakeasyBase {
    queryParams: GetChannelsQueryParams;
    security: GetChannelsSecurity;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
