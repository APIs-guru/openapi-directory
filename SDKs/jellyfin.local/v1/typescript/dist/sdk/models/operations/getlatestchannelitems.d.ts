import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLatestChannelItemsQueryParams extends SpeakeasyBase {
    channelIds?: string[];
    fields?: shared.ItemFieldsEnum[];
    filters?: shared.ItemFilterEnum[];
    limit?: number;
    startIndex?: number;
    userId?: string;
}
export declare class GetLatestChannelItemsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLatestChannelItemsRequest extends SpeakeasyBase {
    queryParams: GetLatestChannelItemsQueryParams;
    security: GetLatestChannelItemsSecurity;
}
export declare class GetLatestChannelItemsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
