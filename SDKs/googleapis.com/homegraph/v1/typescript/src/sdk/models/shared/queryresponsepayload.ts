import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryResponsePayload
/** 
 * Payload containing device states information.
**/
export class QueryResponsePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices" })
  devices?: Map<string, Map<string, any>>;
}
