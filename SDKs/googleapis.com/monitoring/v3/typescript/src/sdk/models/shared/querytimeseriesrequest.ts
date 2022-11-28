import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryTimeSeriesRequest
/** 
 * The QueryTimeSeries request.
**/
export class QueryTimeSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
