import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiUsageAggregatedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=colHeaders" })
  colHeaders?: string[];

  @Metadata({ data: "json, name=data" })
  data?: number[][];

  @Metadata({ data: "json, name=historyTruncated" })
  historyTruncated?: boolean;

  @Metadata({ data: "json, name=periodEnd" })
  periodEnd?: number;

  @Metadata({ data: "json, name=periodStart" })
  periodStart?: number;

  @Metadata({ data: "json, name=rowHeaders" })
  rowHeaders?: string[];

  @Metadata({ data: "json, name=timeUnit" })
  timeUnit?: string;

  @Metadata({ data: "json, name=totalUsage" })
  totalUsage?: number;
}
