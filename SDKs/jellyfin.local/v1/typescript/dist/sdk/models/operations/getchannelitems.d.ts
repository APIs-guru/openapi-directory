import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelItemsPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetChannelItemsQueryParams extends SpeakeasyBase {
    fields?: shared.ItemFieldsEnum[];
    filters?: shared.ItemFilterEnum[];
    folderId?: string;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
    userId?: string;
}
export declare class GetChannelItemsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetChannelItemsRequest extends SpeakeasyBase {
    pathParams: GetChannelItemsPathParams;
    queryParams: GetChannelItemsQueryParams;
    security: GetChannelItemsSecurity;
}
export declare class GetChannelItemsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
