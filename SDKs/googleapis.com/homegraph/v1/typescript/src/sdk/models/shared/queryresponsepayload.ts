import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryResponsePayload
/** 
 * Payload containing device states information.
**/
export class QueryResponsePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices" })
  devices?: Map<string, Map<string, any>>;
}
