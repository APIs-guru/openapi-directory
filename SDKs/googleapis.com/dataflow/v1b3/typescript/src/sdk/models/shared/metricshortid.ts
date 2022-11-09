import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricShortId
/** 
 * The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest
**/
export class MetricShortId extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricIndex" })
  metricIndex?: number;

  @Metadata({ data: "json, name=shortId" })
  shortId?: string;
}
