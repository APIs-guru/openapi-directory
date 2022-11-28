import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordingsQueryParams extends SpeakeasyBase {
    channelId?: string;
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    isInProgress?: boolean;
    isKids?: boolean;
    isLibraryItem?: boolean;
    isMovie?: boolean;
    isNews?: boolean;
    isSeries?: boolean;
    isSports?: boolean;
    limit?: number;
    seriesTimerId?: string;
    startIndex?: number;
    status?: shared.RecordingStatusEnum;
    userId?: string;
}
export declare class GetRecordingsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRecordingsRequest extends SpeakeasyBase {
    queryParams: GetRecordingsQueryParams;
    security: GetRecordingsSecurity;
}
export declare class GetRecordingsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
