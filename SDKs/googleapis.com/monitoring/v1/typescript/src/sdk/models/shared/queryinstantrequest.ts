import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryInstantRequest
/** 
 * QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.
**/
export class QueryInstantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
