import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Api
/** 
 * This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
**/
export class Api extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
