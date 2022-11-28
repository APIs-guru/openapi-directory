import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResumeItemsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetResumeItemsQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    excludeItemTypes?: string[];
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    includeItemTypes?: string[];
    limit?: number;
    mediaTypes?: string[];
    parentId?: string;
    searchTerm?: string;
    startIndex?: number;
}
export declare class GetResumeItemsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetResumeItemsRequest extends SpeakeasyBase {
    pathParams: GetResumeItemsPathParams;
    queryParams: GetResumeItemsQueryParams;
    security: GetResumeItemsSecurity;
}
export declare class GetResumeItemsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
