import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryResponsePayload } from "./queryresponsepayload";



// QueryResponse
/** 
 * Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.google.com/assistant/smarthome/reference/intent/query). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ```
**/
export class QueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: QueryResponsePayload;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
