import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";
export declare enum CountArtifactsRequestViewEnum {
    CountResultViewUnspecified = "COUNT_RESULT_VIEW_UNSPECIFIED",
    TotalCount = "TOTAL_COUNT",
    All = "ALL"
}
/**
 * Count artifacts request.
**/
export declare class CountArtifactsRequest extends SpeakeasyBase {
    query?: Query;
    view?: CountArtifactsRequestViewEnum;
}
