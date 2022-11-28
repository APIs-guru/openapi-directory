import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyncResponsePayload } from "./syncresponsepayload";



// SyncResponse
/** 
 * Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.google.com/assistant/smarthome/reference/intent/sync). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "agentUserId": "1836.15267389", "devices": [{ "id": "123", "type": "action.devices.types.OUTLET", "traits": [ "action.devices.traits.OnOff" ], "name": { "defaultNames": ["My Outlet 1234"], "name": "Night light", "nicknames": ["wall plug"] }, "willReportState": false, "deviceInfo": { "manufacturer": "lights-out-inc", "model": "hs1234", "hwVersion": "3.2", "swVersion": "11.4" }, "customData": { "fooValue": 74, "barValue": true, "bazValue": "foo" } }] } } ```
**/
export class SyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: SyncResponsePayload;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
