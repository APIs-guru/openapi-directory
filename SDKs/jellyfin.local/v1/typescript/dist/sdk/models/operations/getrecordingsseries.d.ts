import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordingsSeriesQueryParams extends SpeakeasyBase {
    channelId?: string;
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    groupId?: string;
    imageTypeLimit?: number;
    isInProgress?: boolean;
    limit?: number;
    seriesTimerId?: string;
    startIndex?: number;
    status?: shared.RecordingStatusEnum;
    userId?: string;
}
export declare class GetRecordingsSeriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRecordingsSeriesRequest extends SpeakeasyBase {
    queryParams: GetRecordingsSeriesQueryParams;
    security: GetRecordingsSeriesSecurity;
}
export declare class GetRecordingsSeriesResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
