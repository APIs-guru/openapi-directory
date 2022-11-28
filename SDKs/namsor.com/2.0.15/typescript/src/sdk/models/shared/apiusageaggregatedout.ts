import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiUsageAggregatedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colHeaders" })
  colHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: number[][];

  @SpeakeasyMetadata({ data: "json, name=historyTruncated" })
  historyTruncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=periodEnd" })
  periodEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=periodStart" })
  periodStart?: number;

  @SpeakeasyMetadata({ data: "json, name=rowHeaders" })
  rowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=totalUsage" })
  totalUsage?: number;
}
