import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WellsTagsListQueryParams extends SpeakeasyBase {
    ordering?: string;
    search?: string;
}
export declare class WellsTagsListRequest extends SpeakeasyBase {
    queryParams: WellsTagsListQueryParams;
}
export declare class WellsTagsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wellTagSearches?: shared.WellTagSearch[];
}
