import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryInstantRequest
/** 
 * QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.
**/
export class QueryInstantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
