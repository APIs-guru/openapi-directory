import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HotTablet
/** 
 * A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.
**/
export class HotTablet extends SpeakeasyBase {
  @Metadata({ data: "json, name=endKey" })
  endKey?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeCpuUsagePercent" })
  nodeCpuUsagePercent?: number;

  @Metadata({ data: "json, name=startKey" })
  startKey?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=tableName" })
  tableName?: string;
}
