import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PageviewsCountsTimeRangeEnum {
    AllTime = "ALL_TIME",
    ThirtyDays = "THIRTY_DAYS",
    SevenDays = "SEVEN_DAYS"
}


export class PageviewsCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: PageviewsCountsTimeRangeEnum;
}


export class Pageviews extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blogId" })
  blogId?: string;

  @SpeakeasyMetadata({ data: "json, name=counts", elemType: PageviewsCounts })
  counts?: PageviewsCounts[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
