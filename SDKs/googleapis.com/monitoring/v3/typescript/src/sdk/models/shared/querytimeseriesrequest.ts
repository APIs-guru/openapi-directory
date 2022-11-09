import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryTimeSeriesRequest
/** 
 * The QueryTimeSeries request.
**/
export class QueryTimeSeriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;
}
