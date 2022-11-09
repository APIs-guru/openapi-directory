import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";

export enum CountArtifactsRequestViewEnum {
    CountResultViewUnspecified = "COUNT_RESULT_VIEW_UNSPECIFIED"
,    TotalCount = "TOTAL_COUNT"
,    All = "ALL"
}


// CountArtifactsRequest
/** 
 * Count artifacts request.
**/
export class CountArtifactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query?: Query;

  @Metadata({ data: "json, name=view" })
  view?: CountArtifactsRequestViewEnum;
}
