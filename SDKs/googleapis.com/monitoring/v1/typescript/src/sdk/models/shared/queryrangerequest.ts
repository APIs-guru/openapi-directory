import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryRangeRequest
/** 
 * QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters.
**/
export class QueryRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;

  @Metadata({ data: "json, name=step" })
  step?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
