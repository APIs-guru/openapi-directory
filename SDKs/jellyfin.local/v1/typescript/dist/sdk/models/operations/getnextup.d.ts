import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNextUpQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImges?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    parentId?: string;
    seriesId?: string;
    startIndex?: number;
    userId?: string;
}
export declare class GetNextUpSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetNextUpRequest extends SpeakeasyBase {
    queryParams: GetNextUpQueryParams;
    security: GetNextUpSecurity;
}
export declare class GetNextUpResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
