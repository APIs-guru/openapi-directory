import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricShortId
/** 
 * The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest
**/
export class MetricShortId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricIndex" })
  metricIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=shortId" })
  shortId?: string;
}
