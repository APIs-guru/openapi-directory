import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Api
/** 
 * This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
**/
export class Api extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
