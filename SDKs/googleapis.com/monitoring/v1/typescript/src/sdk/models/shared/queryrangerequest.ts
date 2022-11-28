import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryRangeRequest
/** 
 * QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters.
**/
export class QueryRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
