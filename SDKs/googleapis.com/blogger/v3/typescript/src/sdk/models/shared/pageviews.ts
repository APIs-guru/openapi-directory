import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PageviewsCountsTimeRangeEnum {
    AllTime = "ALL_TIME"
,    ThirtyDays = "THIRTY_DAYS"
,    SevenDays = "SEVEN_DAYS"
}


export class PageviewsCounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: PageviewsCountsTimeRangeEnum;
}


export class Pageviews extends SpeakeasyBase {
  @Metadata({ data: "json, name=blogId" })
  blogId?: string;

  @Metadata({ data: "json, name=counts", elemType: shared.PageviewsCounts })
  counts?: PageviewsCounts[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
