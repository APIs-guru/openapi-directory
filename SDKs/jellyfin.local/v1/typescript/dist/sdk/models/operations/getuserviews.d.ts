import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserViewsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUserViewsQueryParams extends SpeakeasyBase {
    includeExternalContent?: boolean;
    includeHidden?: boolean;
    presetViews?: string[];
}
export declare class GetUserViewsRequest extends SpeakeasyBase {
    pathParams: GetUserViewsPathParams;
    queryParams: GetUserViewsQueryParams;
}
export declare class GetUserViewsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
