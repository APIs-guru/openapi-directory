import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HotTablet
/** 
 * A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.
**/
export class HotTablet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endKey" })
  endKey?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeCpuUsagePercent" })
  nodeCpuUsagePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=startKey" })
  startKey?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName?: string;
}
