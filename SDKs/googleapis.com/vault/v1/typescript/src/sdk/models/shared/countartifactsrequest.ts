import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";


export enum CountArtifactsRequestViewEnum {
    CountResultViewUnspecified = "COUNT_RESULT_VIEW_UNSPECIFIED",
    TotalCount = "TOTAL_COUNT",
    All = "ALL"
}


// CountArtifactsRequest
/** 
 * Count artifacts request.
**/
export class CountArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Query;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: CountArtifactsRequestViewEnum;
}
